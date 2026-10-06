const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

// Run the shared banner logic without loading unrelated page animations.
const source = fs.readFileSync('js/script.js', 'utf8');
const start = source.indexOf("  let consent = document.querySelector('.cookie-banner');");
assert.ok(start >= 0, 'Cookie note setup exists');
const setup = source.slice(start, source.lastIndexOf('\n});'));
const classList = () => {
  const values = new Set();
  return { add: (value) => values.add(value), remove: (value) => values.delete(value), contains: (value) => values.has(value) };
};
const createDialog = () => {
  const events = {};
  const buttonEvents = {};
  return {
    classList: classList(), hidden: true, open: false, attributes: {}, events, buttonEvents,
    setAttribute(name, value) { this.attributes[name] = value; },
    showModal() { assert.equal(this.hidden, false); this.open = true; },
    close() { this.open = false; },
    addEventListener(name, handler) { events[name] = handler; },
    querySelectorAll() { return [{ addEventListener: (name, handler) => { buttonEvents[name] = handler; } }]; }
  };
};
const run = ({ existing = false, saved = null, blocked = false, pageName = 'index.html' } = {}) => {
  let dialog = existing ? createDialog() : null;
  const storage = new Map(saved ? [['leitwerk-cookie-note', saved]] : []);
  const body = { classList: classList(), append: (element) => { dialog = element; } };
  vm.runInNewContext(setup, {
    pageName,
    document: {
      body, querySelector: () => dialog,
      createElement: (tag) => { assert.equal(tag, 'dialog'); return createDialog(); }
    },
    window: { localStorage: {
      getItem(key) { if (blocked) throw Error('Storage blocked'); return storage.get(key) ?? null; },
      setItem(key, value) { if (blocked) throw Error('Storage blocked'); storage.set(key, value); }
    } }
  });
  return { dialog, body, storage };
};

for (const existing of [false, true]) {
  const { dialog, body, storage } = run({ existing });
  assert.equal(dialog.open, true);
  assert.equal(body.classList.contains('cookie-note-open'), true);
  dialog.buttonEvents.click();
  assert.equal(dialog.open, false);
  assert.equal(dialog.hidden, true);
  assert.equal(body.classList.contains('cookie-note-open'), false);
  assert.equal(storage.get('leitwerk-cookie-note'), 'acknowledged');
}
const returning = run({ saved: 'acknowledged' });
assert.equal(returning.dialog.open, false);
assert.equal(returning.dialog.hidden, true);
assert.equal(returning.body.classList.contains('cookie-note-open'), false);
const restricted = run({ blocked: true });
assert.equal(restricted.dialog.open, true);
restricted.dialog.buttonEvents.click();
assert.equal(restricted.dialog.hidden, true);
const escaped = run();
let prevented = false;
escaped.dialog.events.cancel({ preventDefault: () => { prevented = true; } });
assert.equal(prevented, true);
assert.equal(escaped.dialog.hidden, true);
assert.equal(escaped.body.classList.contains('cookie-note-open'), false);
assert.equal(escaped.storage.size, 0, 'Escape closes without storing acknowledgement');
for (const pageName of ['datenschutz.html', 'impressum.html']) {
  const legal = run({ pageName });
  assert.equal(legal.dialog.hidden, true, 'Legal information is not covered by the note');
  assert.equal(legal.storage.size, 0);
}
console.log('PASS: existing/generated dialog, acknowledgement, returning visit, blocked storage, Escape and legal pages.');
