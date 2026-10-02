# Leitwerk Digital

Statische, responsive Unternehmenswebsite für Leitwerk Digital. Die Website benötigt keinen Build-Schritt und kann direkt mit der VS-Code-Erweiterung **Live Server** geöffnet werden.

## Struktur

- `index.html` – Startseite
- `ueber-uns.html`, `leistungen.html`, `webdesign.html`, `betreuung.html`, `domain-hosting.html` – Unternehmens- und Leistungsseiten
- `referenzen.html` sowie die zwei Projektseiten – Referenzen
- `faq.html`, `kontakt.html`, `impressum.html`, `datenschutz.html` – Service- und Rechteseiten
- `css/style.css` – gesamte Gestaltung in einer Datei
- `js/script.js` – mobile Navigation, Scroll-Reveals, FAQ-/Cookie-Verhalten und Formularanzeige
- `images/` – hier kommen Logo, Portrait, Projektfotos und das optionale Hero-Video hinein

## Code in VS Code bearbeiten

Für dieses Projekt sind einheitliche Formatierungsregeln hinterlegt. VS Code empfiehlt beim
ersten Öffnen automatisch die Erweiterung **Prettier – Code formatter**.

- Beim Speichern werden HTML, CSS, JavaScript und JSON automatisch formatiert.
- Eine Datei kann jederzeit manuell mit `Shift + Alt + F` formatiert werden.
- Die Regeln liegen in `.prettierrc.json`.
- Die VS-Code-Einstellungen befinden sich in `.vscode/settings.json`.

Die Hauptbereiche der CSS-Datei sind durch nummerierte Kommentare getrennt. Dadurch lassen sich
Navigation, Hero, Komponenten, Animationen und responsive Regeln schneller wiederfinden.

## Vor dem Livegang

1. Bildplatzhalter durch echte Bilder im Ordner `images/` ersetzen und Alt-Texte ergänzen.
2. Das Kontaktformular ist mit FormSubmit verbunden. Nach dem ersten Testversand schickt FormSubmit eine Aktivierungs-E-Mail an `office@itsolutions-leitner.at`; diese einmal bestätigen und danach Versand sowie automatische Empfangsbestätigung testen.
3. Impressum und Datenschutzerklärung rechtlich prüfen und fehlende Firmenangaben ergänzen.
4. Die Domain in Vercel verbinden und anschließend `sitemap.xml` in der Google Search Console einreichen.

## Veröffentlichung

Die Dateien in ein Git-Repository legen, auf GitHub pushen und das Repository in Vercel importieren. Bei einem Push auf `main` kann Vercel automatisch neu deployen.
