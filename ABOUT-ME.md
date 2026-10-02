# ABOUT ME — Persönliches Arbeits-Briefing für Codex

Diese Datei gibt Codex den nötigen Kontext darüber, wer ich bin, wie ich arbeite und was meine Ziele sind. Bitte diese Datei zu Beginn jeder neuen Session lesen, bevor wir mit einem Projekt starten.

---

## 1. Wer ich bin & was mein Ziel ist

Ich baue professionelle Webseiten für Firmenkunden — entweder komplett neu oder als Überarbeitung bestehender Seiten. Mein Ziel ist es, mit Hilfe von Codex so schnell und effizient wie möglich hochwertige, fertige Webseiten zu erstellen, ohne selbst programmieren zu müssen.

Ich bin **kein Entwickler**. Ich verstehe grob, was HTML/CSS/JS ist, aber ich schreibe keinen Code selbst und möchte das auch nicht. Codex übernimmt die gesamte Code-Erstellung.

---

## 2. Mein technisches Setup

- **Editor:** Visual Studio Code (VS Code) - schreibe die Codes bitte immer schön strukturiert, sprich eine saubere Codestruktur
- **Versionierung:** Git (über Git Bash) + GitHub
- **Hosting:** Vercel (automatisches Deployment bei jedem `git push` auf `main`)
- **Technologie:** Reines HTML, CSS, JavaScript — kein Framework (kein React, kein Vue, kein WordPress, kein Build-Tool)
- **Lokales Testen:** VS Code Extension "Live Server"

---

## 3. Wie ein Projekt bei mir abläuft

**Schritt 1 — Du liest diese Datei (ABOUT-ME.md)**
→ Danach wartest du. Du legst noch keine Dateien an, du baust noch nichts. Du bestätigst nur kurz dass du die Datei gelesen hast.

**Schritt 2 — Ich lege die Bilder in den `images/` Ordner**
→ Ich benenne die Bilder passend (logo.jpg, team-vorname.jpg etc.) und lege sie in `images/` ab. Das mache ich selbst, bevor du anfängst.

**Schritt 3 — Ich sage dir: "Lies PROJECT-NOTES.md und baue die Website"**
→ Erst jetzt liest du die PROJECT-NOTES.md und legst sofort danach die komplette Projektstruktur an und baust die fertige Website — ohne weitere Rückfragen, ohne auf weitere Anweisungen zu warten.

**Wichtig:** Ich möchte keine halb-fertigen Codes, keine "füge das hier ein"-Anweisungen und kein schrittweises Erklären. Sobald du PROJECT-NOTES.md gelesen hast, baust du alles komplett und fertig.

---

## 4. Projektstruktur — gilt für ALLE meine Projekte

Bewusste Entscheidung für eine **schlanke Struktur** statt modularer Mehrfach-CSS-Dateien (reset.css, variables.css, etc. wurden getestet und verworfen — zu viel Verwaltungsaufwand, zu viele Fehlerquellen für Einzelprojekte ohne Build-Tools).

```
projekt-name/
├── index.html
├── [weitere-seite].html       ← echte Unterseiten bei Mehrseiten-Projekten
├── css/
│   └── style.css              ← EINE Datei, intern mit Kommentar-Trennern strukturiert
├── js/
│   └── script.js              ← EINE Datei
├── images/                    ← alle Bilder mit sprechenden Dateinamen
├── PROJECT-NOTES.md           ← projektspezifischer Kontext (Farben, Firma, To-Dos etc.)
├── ABOUT-ME.md                ← diese Datei
└── README.md                  ← Projektstruktur + Git/Vercel-Anleitung
```

**Regel:** Eine CSS-Datei, eine JS-Datei — intern mit Kommentar-Abschnitten sauber strukturiert. Nicht mehr, nicht weniger.

---

## 4b. PFLICHT — Projektstruktur bei jedem neuen Projekt anlegen

⚠️ **Das ist keine Empfehlung, sondern eine feste Regel.**

Bei jedem neuen Projekt legt Codex diese Struktur an, bevor auch nur eine Zeile Code geschrieben wird:

**Schritt 1 — Ordner anlegen:**
```
css/
js/
images/
```

**Schritt 2 — Dateien anlegen:**
```
index.html
css/style.css
js/script.js
README.md
PROJECT-NOTES.md   ← aus dem Kunden-Briefing befüllen
ABOUT-ME.md        ← Kopie dieser Datei
```

**Schritt 3 — Weitere HTML-Seiten anlegen** (je nach Briefing):
```
ueber-uns.html
leistungen.html
kontakt.html
impressum.html
datenschutz.html
```

**Schritt 4 — Bilder:**
Alle vom Kunden gelieferten Bilder kommen in `images/` mit sprechenden Dateinamen:
- Logo → `images/logo.png` oder `images/logo.jpg`
- Team-Fotos → `images/team-vorname.jpg`
- Hintergrundbilder → `images/hero-bg.jpg`
- Projektfotos → `images/projekt-01.jpg` etc.

**Pfad-Regel:** Immer relative Pfade verwenden — `images/logo.jpg`, `css/style.css`, `js/script.js` — KEIN führendes `/`, sonst funktioniert es auf Vercel nicht korrekt.

**CSS-Kommentar-Struktur** (intern in `style.css`, immer in dieser Reihenfolge):
```css
/* === 1. VARIABLEN & RESET === */
/* === 2. TYPOGRAFIE === */
/* === 3. LAYOUT === */
/* === 4. NAVIGATION === */
/* === 5. BUTTONS === */
/* === 6. HERO === */
/* === 7. SECTIONS === */
/* === 8. KOMPONENTEN (Cards, Team, FAQ etc.) === */
/* === 9. FOOTER === */
/* === 10. ANIMATIONEN === */
/* === 11. RESPONSIVE === */
```

---

## 5. Design-Grundsätze die immer gelten

- **Professionell und hochwertig** — das Ergebnis soll so aussehen, als käme es von einer Agentur
- **Markenfarbe des Kunden hat immer Vorrang** — ich gebe die Farbe an, Codex baut das Design konsequent darauf auf
- **Keine Klischees:** Kein generisches Glasmorphism-Startup-Look (es sei denn explizit gewünscht), keine 3D-Buttons, kein visuelles Overdesign, keine Emojis (auch nicht in der mobilen Version - immer checken)
- **Responsive** — mobile Ansicht ist Pflicht, immer
- **Schriftarten:** Bevorzugt Google Fonts, elegant und gut lesbar — z. B. Sora + Inter (wurde bereits erfolgreich eingesetzt). Schriftartenwahl immer zum Charakter der Branche passend oder in Briefing festgelegt
- **Animationen:** Scroll-Reveal-Animationen (`.reveal`-Klasse + IntersectionObserver) sind Standard, dezent — keine übertriebenen Effekte, außer in Notes gewünscht
- verwende keine Emojis, außer es wird ausdrücklich im PROJECT-NOTES angekreuzt. Auch nicht in der mobilen Version (immer gleich checken)

---

## 6. Was ich dem Kunden liefere

- Vollständige, fertige Website (HTML/CSS/JS)
- Auf GitHub versioniert
- Auf Vercel gehostet (eigene Domain anbindbar)
- Kein WordPress, keine laufenden Plugin-Kosten, keine Datenbank-Abhängigkeit

---

## 7. Wie ich mit Codex am effizientesten arbeite

- **Neue Website für einen Kunden:** Ich gebe Branche, Inhalte, Stil-Referenzen und Bilder → Codex baut alles von Grund auf, liefert komplette Dateien
- **Bestehende Website überarbeiten:** Ich schicke Link oder Screenshot der alten Seite → Codex übernimmt Inhalte, baut sie professionell neu
- **Kleine Änderungen an bestehenden Projekten** (häufig!): Ich sage z. B. "ändere auf index.html den Telefonnummer-Text im Footer" oder "passe die Farbe der Buttons auf Seite X an" → Codex ändert direkt in der bestehenden Datei, ohne alles neu zu schreiben
- **PROJECT-NOTES.md** im jeweiligen Projektordner enthält alle projektspezifischen Details (Firmenname, Farben, Designentscheidungen, offene To-Dos) — bitte immer zuerst lesen

---

## 8. Was Codex bei mir NIE tun soll

- Keinen Code zeilenweise erklären (ich lese ihn nicht, ich brauche nur das Ergebnis)
- Keine "füge das hier ein"-Anweisungen ohne fertigen Kontext
- Kein schrittweises "und dann machen wir als nächstes X"-Aufbauen bei Projekten, wo ich das vollständige Ergebnis brauche
- Keine modulare Mehrfach-CSS-Dateistruktur vorschlagen (wurde bewusst verworfen)
- Nicht nach jeder kleinen Änderung fragen ob alles passt — einfach machen, ich melde mich wenn etwas nicht stimmt
