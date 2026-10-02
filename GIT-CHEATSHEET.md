# GIT CHEATSHEET — Erstmaliges Setup & Änderungen hochladen

---

## A) ERSTMALIGES SETUP (einmalig pro neuem Projekt)

```bash
# 1. In den Projektordner navigieren
cd pfad/zu/deinem/projektordner
# Beispiel: cd C:/Users/Christoph/neuburger-metalltechnik

# 2. Git initialisieren
git init

# 3. Mit GitHub-Repository verbinden
# (Link von GitHub: grüner "Code"-Button → HTTPS kopieren)
git remote add origin https://github.com/itsolutionsleitner/DEIN-REPO-NAME.git

# 4. Alles hochladen (nur beim allerersten Mal)
git add .
git commit -m "v1.0 Projektname Initial Commit"
git branch -M main
git push -u origin main
```

→ Danach auf Vercel: Repository importieren → Framework "Other" → Deploy.
→ Ab jetzt deployed Vercel automatisch bei jedem Push.

---

## B) ÄNDERUNGEN HOCHLADEN (ab dem zweiten Mal, immer gleich)

```bash
git add .
git commit -m "Kurze Beschreibung was geändert wurde"
git push
```

**Beispiele für Commit-Nachrichten:**
```bash
git commit -m "Footer Telefonnummer aktualisiert"
git commit -m "FAQ Sektion auf Startseite ergänzt"
git commit -m "Neue Leistung hinzugefügt"
git commit -m "Kontaktformular Formspree eingebunden"
git commit -m "v1.1 Farbanpassung Buttons"
```

---

## C) FALLS ETWAS SCHIEFLÄUFT

**Falschen Remote-Link korrigieren:**
```bash
git remote remove origin
git remote add origin https://github.com/itsolutionsleitner/DEIN-REPO-NAME.git
git push -u origin main
```

**Aktuellen Status prüfen (welche Dateien wurden geändert?):**
```bash
git status
```

**Letzten Commit rückgängig machen (falls nötig):**
```bash
git revert HEAD --no-edit

git push
```

---

## D) WICHTIGE HINWEISE

- Die `warning: LF will be replaced by CRLF` Meldungen sind **kein Fehler** — einfach ignorieren, das ist normal auf Windows.
- `git push -u origin main` nur beim **ersten Mal** nötig — danach reicht `git push`.
- Vercel braucht ca. **30–60 Sekunden** nach dem Push bis die Seite live aktualisiert ist.
- Den GitHub-Link immer von GitHub kopieren (grüner "Code"-Button → HTTPS) — nie den Platzhalter-Link verwenden.

### Empfohlen: `.gitignore` gleich zu Beginn anlegen

Diese Datei verhindert, dass lokale Editor- oder Betriebssystem-Dateien versehentlich auf GitHub landen. Im Projekt-Ordner eine Datei namens `.gitignore` anlegen und Folgendes eintragen:

```gitignore
# Lokale Editor-Einstellungen
.vscode/

# Betriebssystem-Dateien
.DS_Store
Thumbs.db

# Lokale Umgebungsvariablen / Zugangsdaten
.env
.env.*
!.env.example
```

⚠️ Zugangsdaten, API-Keys, Formspree-Keys oder Passwörter niemals in `index.html`, `script.js` oder in einen Git-Commit schreiben. Alles, was im Frontend steht, kann von Besuchern eingesehen werden.

## GIT aufwecken
```bash

git commit --allow-empty -m "Beschreibung, die beim letzten commit war"
git push
```

## Cookies zurücksetzen
```javascript
localStorage.removeItem("cookieConsent");
location.reload();
```

## C) Git Verbindung

## Git Verbindung überprüfen
```bash

git remote -v

```

## Git Verbindung ändern
```bash

git remote set-url origin https://github.com/itsolutionsleitner/NEUES-REPOSITORY.git

```

## Letzte Gitänderung abfragen
```bash

git log -1 --oneline

```

## D) Git ersetzten einer kompletten Webseite mit bestehenden Git Repository

## Git Klonen
```bash

git clone https://github.com/itsolutionsleitner/DEIN-REPO.git
```

Dann ersetzt du im geklonten Ordner die alten Dateien durch die neuen und machst:
```bash
git add .
git commit -m "Neue Website-Version"
git push
```

**Wichtig bei einer bestehenden Website:** Den geklonten `.git`-Ordner nicht löschen. Er enthält die Verbindung zum Repository und die komplette Versionsgeschichte. Nur die eigentlichen Website-Dateien ersetzen.

---

## E) NÜTZLICHE SICHERHEITSBEFEHLE

**Vor dem Hochladen prüfen, was tatsächlich übertragen wird:**
```bash
git status
git diff
```

**Letzten Stand von GitHub holen, bevor auf zwei Geräten gearbeitet wird:**
```bash
git pull
```

Wenn `git pull` einen Konflikt meldet: Nicht wahllos Dateien löschen oder überschreiben. Zuerst den Konflikt klären bzw. die betroffene Datei prüfen.



## F) GIT PROJEKT AUF EINE FRÜHERE vERSION ZURÜCKSETZEN

Mit Git kann eine frühere Version eines Projekts wiederhergestellt werden. Jeder Commit stellt dabei einen gespeicherten Stand des Projekts dar.

Die folgende Vorgehensweise erstellt zuerst eine Sicherung der aktuellen Version. Dadurch kann später jederzeit wieder auf den derzeitigen Stand zurückgewechselt werden.

## 1. Aktuellen Status überprüfen

Im Terminal von Visual Studio Code folgenden Befehl eingeben:

```bash
git status
```

Dadurch wird angezeigt, ob noch nicht gespeicherte Änderungen vorhanden sind.

Falls Änderungen vorhanden sind, sollten diese zuerst gespeichert und zu GitHub hochgeladen werden:

```bash
git add .
git commit -m "Sicherung vor dem Zurücksetzen"
git push
```

## 2. Vorhandene Versionen anzeigen

Alle bisherigen Commits können mit folgendem Befehl angezeigt werden:

```bash
git log --oneline
```

Die Ausgabe sieht beispielsweise so aus:

```text
a81f3c2 Version 10
91bd7e4 Version 9
4f2a8d1 Version 8
c73e9b5 Version 7
```

Links befindet sich die Commit-ID. Rechts steht die beim Commit eingetragene Beschreibung.

Soll beispielsweise Version 7 wiederhergestellt werden, wird die Commit-ID `c73e9b5` benötigt.

Zum Beenden der Commit-Übersicht kann die Taste `Q` gedrückt werden.

## 3. Sicherung der aktuellen Version erstellen

Bevor das Projekt zurückgesetzt wird, sollte ein zusätzlicher Sicherungs-Branch erstellt werden:

```bash
git branch backup-vor-zuruecksetzen
git push origin backup-vor-zuruecksetzen
```

Dadurch bleibt die aktuelle Version zusätzlich unter dem Branch `backup-vor-zuruecksetzen` auf GitHub gespeichert.

## 4. Alte Version vorübergehend ansehen

Die gewünschte Version kann zuerst testweise geöffnet werden:

```bash
git switch --detach COMMIT-ID
```

Beispiel:

```bash
git switch --detach c73e9b5
```

Visual Studio Code zeigt danach den Stand dieser früheren Version an.

Die Website kann nun lokal gestartet und überprüft werden.

In diesem Zustand sollten keine Änderungen gespeichert oder Commits erstellt werden.

## 5. Zur aktuellen Version zurückwechseln

Nach der Überprüfung kann wieder auf den aktuellen Hauptbranch gewechselt werden:

```bash
git switch main
```

Falls der Hauptbranch nicht `main`, sondern `master` heißt, muss stattdessen folgender Befehl verwendet werden:

```bash
git switch master
```

## 6. Alte Version dauerhaft wiederherstellen

Wenn die überprüfte Version dauerhaft wieder der aktuelle Stand des Projekts werden soll, wird zuerst sichergestellt, dass man sich auf dem Hauptbranch befindet:

```bash
git switch main
```

Danach wird der Hauptbranch auf die gewünschte Commit-ID zurückgesetzt:

```bash
git reset --hard COMMIT-ID
```

Beispiel:

```bash
git reset --hard c73e9b5
```

Anschließend wird die Änderung zu GitHub hochgeladen:

```bash
git push --force-with-lease
```

Danach ist die frühere Version wieder der aktuelle Stand auf GitHub.

Wenn das GitHub-Projekt mit Vercel verbunden ist, sollte Vercel automatisch ein neues Deployment mit dieser Version erstellen.

## Komplette Befehlsreihenfolge

```bash
git status

git add .
git commit -m "Sicherung vor dem Zurücksetzen"
git push

git log --oneline

git branch backup-vor-zuruecksetzen
git push origin backup-vor-zuruecksetzen

git switch --detach COMMIT-ID
```

Danach die Website lokal überprüfen.

Wenn die Version übernommen werden soll:

```bash
git switch main
git reset --hard COMMIT-ID
git push --force-with-lease
```

## Wieder zur gesicherten neuen Version zurückkehren

Falls später doch wieder die gesicherte neuere Version verwendet werden soll:

```bash
git switch main
git reset --hard backup-vor-zuruecksetzen
git push --force-with-lease
```

Dadurch wird der Hauptbranch wieder auf den Stand des zuvor erstellten Backup-Branches gesetzt.

## Wichtige Hinweise

`COMMIT-ID` muss immer durch die tatsächliche Commit-ID ersetzt werden.

Beispiel:

```bash
git reset --hard c73e9b5
```

Der Befehl `git reset --hard` löscht nicht gespeicherte lokale Änderungen. Deshalb muss vorher immer `git status` überprüft werden.

Der Befehl `git push --force-with-lease` verändert den Verlauf des Hauptbranches auf GitHub. Er ist sicherer als ein normales `git push --force`, sollte aber trotzdem nur verwendet werden, wenn vorher eine Sicherung erstellt wurde.
