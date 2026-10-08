# Leinaro

Statische, responsive Unternehmenswebsite für Leinaro. Die Website benötigt keinen Build-Schritt und kann direkt mit der VS-Code-Erweiterung **Live Server** geöffnet werden.

## Struktur

- `index.html` – Startseite
- `ueber-uns.html`, `leistungen.html`, `webdesign.html`, `betreuung.html`, `domain-hosting.html`, `seo.html` – Unternehmens- und Leistungsseiten
- `referenzen.html` sowie die zwei Projektseiten – Referenzen
- `faq.html`, `kontakt.html`, `impressum.html`, `datenschutz.html` – Service- und Rechteseiten
- `css/style.css` – gesamte Gestaltung in einer Datei
- `js/script.js` – mobile Navigation, Scroll-Reveals, FAQ-/Cookie-Verhalten und Formularanzeige
- `images/` – hier kommen Logo, Portrait, Projektfotos und das optionale Hero-Video hinein

## Aktuelles Designsystem

Die Wortmarke liegt als `images/leinaro-logo.svg` vor und wird in Navigation,
Footer und als Favicon verwendet. Sie stammt aus der gelieferten SVG-Datei;
lediglich die Zeichenfläche wurde auf das Logo zugeschnitten. Formen und Farben
sind unverändert. Alte Logo-Dateien bleiben zur Wiederherstellung erhalten.

Der zentrierte Startseiten-Hero ist die visuelle Grundlage für alle Seitentypen:
helle Cremeflächen, Primärfarbe `#D3EE55`, burgunderrote Serifenschrift-Akzente,
kräftige serifenlose Überschriften, dezente Aqua-Bildrahmen und rechteckige Aktionen.
Die gemeinsamen Regeln stehen in Abschnitt **18** von `css/style.css`; der
Startseiten-Hero ist separat in Abschnitt **17** definiert. Gezielte Hervorhebungen
im Inhalt verwenden `editorial-mark`. Die Schriftarten verwenden lokale Systemfonts,
ohne externe Font-Anfragen. `images/editorial-spark.svg` enthält den dekorativen Stern.

Abschnitt **19** ergänzt die Feinabstimmung: wechselnde Farb- und Schriftakzente,
vollständig sichtbare Leistungsbilder ohne Browserleiste, kompakte mobile Intro-Bilder,
bildgestützte Abschlussbereiche, das Webdesign-Zitat und die gestaltete FAQ-Seite.
Alle 15 HTML-Seiten verwenden denselben `footer-unified`-Footer. Die zusätzlichen
Bildflächen nutzen vorhandene Motive; der Startseiten-Hero bleibt unverändert.

Abschnittswechsel erhalten explizite `section-surface--white`, `--cream`, `--aqua`,
`--leaf` oder `--rose`-Klassen. Die dazugehörigen `--surface-*`-Farben sind zentral
definiert und gelten identisch auf Desktop und Mobilgeräten. So bleiben Farbwechsel
bewusst gesetzt, auch wenn später Abschnitte ergänzt oder umsortiert werden.

Eine lokale Strukturprüfung kann in PowerShell mit `./tools/validate-site.ps1`
ausgeführt werden. Sie kontrolliert HTML-Verschachtelung, doppelte IDs, lokale
Dateien/Sprungziele und CSS-Bildpfade. Sie ersetzt keine visuelle Browserprüfung.

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
