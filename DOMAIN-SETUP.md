# DOMAIN SETUP — Anleitung für Vercel + World4You

---

## A) NEUE DOMAIN KAUFEN & MIT VERCEL VERBINDEN

### Schritt 1 — Domain bei World4You kaufen
1. Auf **world4you.at** einloggen (oder neu registrieren)
2. Gewünschte Domain suchen → z.B. `kundenname.at`
3. Domain kaufen und bezahlen
4. Kurz warten bis die Domain im Account aktiv ist (meist sofort)

---

### Schritt 2 — Domain in Vercel eintragen
1. **vercel.com** → dein Projekt öffnen
2. Links auf **Settings** → dann **Domains**
3. Domain eingeben (z.B. `kundenname.at`) → **Add**
4. Auch die www-Variante hinzufügen (z.B. `www.kundenname.at`) → **Add**
5. Vercel zeigt dir jetzt die benötigten DNS-Werte — diese kopieren/notieren:

```
A-Record:
Type:  A
Name:  @
Value: 76.76.21.21

CNAME-Record:
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
```

⚠️ Die Werte immer direkt von Vercel ablesen — sie können sich ändern!

---

### Schritt 3 — DNS-Einträge bei World4You setzen
1. **world4you.at** → einloggen → deine Domain auswählen
2. **DNS** oder **DNS-Einstellungen** öffnen
3. Bestehende A-Records und CNAME-Records für `@` und `www` löschen (falls vorhanden)
4. Neuen **A-Record** anlegen:
   - Name/Host: `@`
   - Typ: `A`
   - Wert: `76.76.21.21`
5. Neuen **CNAME-Record** anlegen:
   - Name/Host: `www`
   - Typ: `CNAME`
   - Wert: `cname.vercel-dns.com`
6. Speichern

⚠️ **E-Mail nicht unterbrechen:** Falls der Kunde E-Mail-Adressen über die Domain verwendet, MX-, SPF-, DKIM- und DMARC-Einträge nicht löschen oder verändern. Für die Website werden normalerweise nur die Einträge für `@` und `www` angepasst. Vorher zur Sicherheit einen Screenshot bzw. Export aller bestehenden DNS-Einträge machen.

---

### Schritt 4 — Warten & prüfen
- DNS-Änderungen brauchen **15 Minuten bis 24 Stunden**
- Auf Vercel → Settings → Domains: grünes Häkchen = aktiv ✓
- SSL/HTTPS (Schloss im Browser) richtet Vercel **automatisch** ein — nichts tun

---

### Schritt 5 — Fertig
Die Website ist jetzt unter der echten Domain erreichbar. Die alte `*.vercel.app` URL funktioniert weiterhin parallel — das ist normal und kein Problem.

---
---

## B) BESTEHENDE DOMAIN UMZIEHEN (von anderem Anbieter zu Vercel)

Das bedeutet: Die Domain existiert bereits (z.B. bei World4You, GoDaddy, etc.) und wurde bisher für eine andere Website genutzt. Du möchtest sie jetzt auf deine neue Vercel-Website umleiten.

⚠️ **Wichtig:** Sobald du die DNS-Einträge änderst, ist die alte Website nicht mehr erreichbar. Das vorher mit dem Kunden absprechen!

---

### Schritt 1 — Domain in Vercel eintragen
Gleich wie bei Punkt A, Schritt 2:
1. Vercel → Projekt → Settings → Domains
2. Bestehende Domain eintragen (z.B. `kundenname.at`) → Add
3. DNS-Werte von Vercel notieren (A-Record + CNAME)

---

### Schritt 2 — Alte DNS-Einträge beim Anbieter ersetzen

**Bei World4You:**
1. Einloggen → Domain auswählen → DNS-Einstellungen
2. Bestehende Einträge für `@` (A-Record) und `www` (CNAME) **löschen**
3. Neue Einträge von Vercel eintragen (siehe Schritt 2 aus Teil A)
4. Speichern

**Bei GoDaddy:**
1. Einloggen → My Products → DNS verwalten
2. A-Record für `@` auf `76.76.21.21` ändern
3. CNAME für `www` auf `cname.vercel-dns.com` ändern
4. Speichern

**Bei anderen Anbietern:**
Das Prinzip ist überall gleich — A-Record und CNAME anpassen. Bei Fragen einfach Screenshot der DNS-Einstellungen schicken.

---

### Schritt 3 — Domain-Transfer (optional, nur falls nötig)
Wenn die Domain zu einem anderen Anbieter **übertragen** werden soll (nicht nur umgeleitet):
- Das ist aufwändiger und dauert mehrere Tage
- Für Vercel **nicht nötig** — die Domain kann beim alten Anbieter bleiben, nur die DNS-Einträge müssen geändert werden
- Transfer nur wenn der Kunde ausdrücklich möchte, dass alles bei World4You liegt

---

### Schritt 4 — Warten & prüfen
- DNS-Propagierung dauert **bis zu 24 Stunden**
- Solange kann es sein dass manche Nutzer noch die alte Seite sehen
- Auf Vercel → Settings → Domains: grünes Häkchen abwarten ✓
- SSL wird automatisch eingerichtet

---
---

## C) HÄUFIGE PROBLEME

**Vercel zeigt "Invalid Configuration" bei der Domain:**
→ DNS-Einträge noch nicht aktiv — einfach warten (bis zu 24h)
→ Prüfen ob A-Record und CNAME korrekt eingetragen sind

**www funktioniert, aber die Domain ohne www nicht (oder umgekehrt):**
→ Beide Varianten in Vercel eintragen (`kundenname.at` UND `www.kundenname.at`)
→ Bei World4You beide Records prüfen

**Kein HTTPS / kein Schloss im Browser:**
→ Vercel richtet SSL automatisch ein, aber erst nach aktivem DNS
→ Einfach 1-2 Stunden nach DNS-Aktivierung warten

**Alte Website noch sichtbar obwohl DNS geändert:**
→ Browser-Cache leeren: Strg + Shift + R
→ Im Inkognito-Fenster testen
→ Oder auf https://dnschecker.org die Domain prüfen — dort sieht man ob die DNS-Änderung schon weltweit aktiv ist

---

## D) CHECKLISTE VOR DOMAIN-AKTIVIERUNG

Bevor die Domain live geschaltet wird, folgendes prüfen:

- [ ] Website ist fertig und auf Vercel als "Ready" deployed
- [ ] Impressum ist vollständig ausgefüllt (Adresse, Gewerbe etc.)
- [ ] Datenschutzerklärung ist vollständig
- [ ] Kontaktformular funktioniert (oder Hinweis dass es Vorlage ist)
- [ ] Alle Seiten und Links funktionieren
- [ ] Mobile Ansicht getestet
- [ ] Kunde hat die Seite abgenommen und freigegeben
- [ ] Domain beim Anbieter aktiv und bezahlt
- [ ] DNS-Einträge in Vercel und beim Domain-Anbieter eingetragen


---
---

## E) WEBSITE VON JIMDO ZU WORLD4YOU + VERCEL UMZIEHEN

### Ziel
Die Domain bleibt erhalten, wird künftig über World4You verwaltet und zeigt auf die neue Website bei Vercel.

⚠️ Vor Beginn:
- Neue Website vollständig fertigstellen und auf Vercel testen (`*.vercel.app`).
- Kunde über kurze Umschaltzeit informieren.
- Falls E-Mail-Adressen über Jimdo laufen, zuerst prüfen, ob diese separat eingerichtet werden müssen.

### Schritt 1 — Domain bei Jimdo prüfen
1. Im Jimdo-Konto anmelden.
2. Prüfen:
   - Ist die Domain bei Jimdo registriert oder nur mit Jimdo verbunden?
   - Läuft E-Mail über Jimdo?
3. Falls die Domain zu Jimdo gehört:
   - Auth-/EPP-Code anfordern.
   - Domain für den Transfer freigeben.

### Schritt 2 — Domain zu World4You übertragen
1. Bei World4You die Funktion "Domain umziehen" auswählen.
2. Domain eingeben.
3. Auth-/EPP-Code eintragen.
4. Transfer abschließen.
5. Warten bis der Transfer abgeschlossen ist (meist wenige Stunden bis einige Tage).

### Schritt 3 — Domain in Vercel hinzufügen
1. Vercel → Projekt → Settings → Domains.
2. Domain und www-Domain hinzufügen.
3. Die von Vercel angezeigten DNS-Einträge notieren.

### Schritt 4 — DNS bei World4You setzen
Nach erfolgreichem Transfer:

- Alte A- und CNAME-Einträge entfernen.
- A-Record:
  - Host: @
  - Typ: A
  - Wert: laut Vercel
- CNAME:
  - Host: www
  - Typ: CNAME
  - Wert: laut Vercel

Speichern.

### Schritt 5 — Funktion prüfen
- Domain öffnet die neue Website.
- HTTPS aktiv.
- www und ohne www funktionieren.
- Kontaktformular testen.
- Browsercache leeren und Inkognito testen.

### Schritt 6 — Jimdo kündigen
Erst wenn alles funktioniert:
- Jimdo-Projekt kündigen (falls nicht mehr benötigt).
- Prüfen, ob keine weiteren Dienste mehr darüber laufen.

---

### Wichtige Hinweise

✔ Die Website sollte bereits vollständig auf Vercel fertig sein, bevor die Domain umgestellt wird.

✔ E-Mail-Konten niemals löschen, bevor geprüft wurde, wo sie künftig verwaltet werden.

✔ Während der DNS-Umstellung kann die Website kurzzeitig nicht erreichbar sein.

✔ Nach der Umstellung einige Stunden bis maximal 24 Stunden auf DNS-Propagation einplanen.
