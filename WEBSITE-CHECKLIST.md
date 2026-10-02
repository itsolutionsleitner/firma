# WEBSITE-CHECKLIST — Qualitätssicherung & Livegang

Diese Checkliste wird verwendet, nachdem die Website gebaut wurde und bevor sie an den Kunden übergeben bzw. auf die echte Domain geschaltet wird.

Sie ersetzt keine Punkte aus `PROJECT-NOTES.md` oder `DOMAIN-SETUP.md`, sondern ergänzt sie als letzte Kontrolle.

---

## A) Inhalte & Darstellung

- [ ] Firmenname, Leistungen, Texte und Kontaktdaten stimmen mit dem Kunden-Briefing überein.
- [ ] Telefonnummern sind anklickbar (`tel:`), E-Mail-Adressen ebenfalls (`mailto:`).
- [ ] Alle Call-to-Action-Buttons führen zur richtigen Stelle bzw. Seite.
- [ ] Navigation, Logo und Footer-Links funktionieren auf jeder Seite.
- [ ] Keine Platzhalter, Beispieltexte, Testdaten oder `TODO`-Hinweise sind mehr sichtbar.
- [ ] Alle Bilder, Logos und Icons laden; keine kaputten Bildsymbole.
- [ ] Bilder haben sinnvolle Alternativtexte (`alt`), sofern sie inhaltlich relevant sind.
- [ ] Rechtschreibung, Umlaute und Sonderzeichen wurden im Browser kontrolliert.
- [ ] Copyright-Jahr und Firmenbezeichnung im Footer stimmen.

---

## B) Mobil, Browser & Bedienung

- [ ] Website auf einem echten Smartphone oder in der mobilen Browser-Ansicht getestet.
- [ ] Navigation ist mobil gut bedienbar und schließt nach einem Klick auf einen Menüpunkt.
- [ ] Keine horizontalen Scrollbalken auf Mobilgeräten.
- [ ] Texte sind lesbar; Buttons und Links sind ausreichend groß und gut antippbar.
- [ ] Desktop-Ansicht bei mindestens einer breiten Bildschirmgröße getestet.
- [ ] Aktuelle Version von Chrome und einem zweiten Browser getestet (z. B. Edge, Firefox oder Safari).
- [ ] Tastaturbedienung getestet: Mit Tab sind Navigation, Links, Buttons und Formularfelder erreichbar.
- [ ] Sichtbarer Fokus bei Tastaturbedienung vorhanden.
- [ ] Bei aktivierter Einstellung „Bewegung reduzieren“ bleiben Inhalte lesbar und Animationen stören nicht.

---

## C) Formulare & Funktionen

- [ ] Kontaktformular mit echten Testdaten ausprobiert.
- [ ] Test-E-Mail kommt beim vorgesehenen Empfänger an.
- [ ] Fehlermeldungen bei leeren bzw. ungültigen Pflichtfeldern sind verständlich.
- [ ] Erfolgsmeldung erscheint erst nach erfolgreicher Übermittlung.
- [ ] Cookie-Banner, Karte, WhatsApp-Button, Downloads und sonstige Sonderfunktionen getestet (falls vorhanden).

---

## D) Auffindbarkeit, Technik & Datenschutz

- [ ] Jede Seite hat einen passenden, individuellen `<title>`.
- [ ] Jede wichtige Seite hat eine kurze, passende Meta-Description.
- [ ] Es gibt genau eine Hauptüberschrift (`h1`) pro Seite; Überschriften sind logisch geordnet.
- [ ] Seiten-URL, Seitentitel und Inhalte passen zusammen.
- [ ] `favicon` vorhanden und im Browser-Tab sichtbar.
- [ ] Impressum und Datenschutzerklärung sind verlinkt und vom Kunden fachlich freigegeben.
- [ ] Externe Dienste (z. B. Google Maps, YouTube, Analytics, Meta Pixel) werden nur eingebunden, wenn Datenschutz und Cookie-Einwilligung dafür geklärt sind.
- [ ] Keine Passwörter, API-Keys oder privaten Daten im Quellcode bzw. GitHub-Repository.
- [ ] Bei sehr großen Bildern: Dateigrößen prüfen und Bilder bei Bedarf vor dem Upload verkleinern oder komprimieren.

---

## E) Vor dem Livegang

- [ ] Letzte Version auf der Vercel-Vorschau (`*.vercel.app`) vollständig getestet.
- [ ] Kunde hat Design, Texte und Bilder freigegeben.
- [ ] Letzter Stand ist auf GitHub gepusht; Vercel zeigt den Deployment-Status „Ready“.
- [ ] Vor einer DNS-Änderung sind die vorhandenen DNS-Einträge dokumentiert.
- [ ] E-Mail-Einträge (MX, SPF, DKIM, DMARC) bleiben erhalten.
- [ ] Gewünschte Hauptdomain festgelegt: mit oder ohne `www`.
- [ ] Nach der Domain-Umstellung: HTTPS, Hauptdomain, www-Variante, Kontaktformular und Links erneut testen.

---

## F) Nach der Übergabe

- [ ] Dem Kunden die Live-URL und ggf. die Vercel-Vorschau senden.
- [ ] Kunde weiß, wohin Änderungswünsche geschickt werden sollen.
- [ ] Zugänge und Verantwortlichkeiten für Domain, GitHub, Vercel und E-Mail sind dokumentiert.
- [ ] Einen letzten Git-Commit mit einer klaren Nachricht erstellen, z. B. `v1.0 Website live geschaltet`.

---

_Hinweis: Diese Checkliste ist eine technische und redaktionelle Kontrolle. Rechtliche Inhalte wie Impressum, Datenschutz oder Cookie-Einwilligungen sollten immer vom Kunden bzw. einer fachkundigen Stelle freigegeben werden._
