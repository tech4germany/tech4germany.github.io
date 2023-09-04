# **Rechtsinformationsportal BMJV 2020**

Darf der Zugang zu Rechtsinformationen im Jahr 2020 auf dem Stand der frühen 90er bleiben? Ein klares Urteil: Nein! Die bestehenden Portale des Bundes bieten interessierten Bürgerinnen und Bürgern keinen zeitgemäßen Zugang zu Rechtsinformationen.

# Hintergrund & Herausforderung

![alt](1_Tech4Germany_Rechtsinformationsportal_GesetzeImInternet-1.png)

Die bestehenden Portale des Bundes [gesetze-im-internet.de](https://www.gesetze-im-internet.de/), [rechtsprechung-im-internet.de](https://www.rechtsprechung-im-internet.de/) und [verwaltungsvorschriften-im-internet.de](https://www.verwaltungsvorschriften-im-internet.de/) sind nicht gut lesbar. Die Portale sind nicht mobil optimiert, die Schrift ist klein, die Suche ist versteckt, die Filtermöglichkeiten sind sperrig und die Suchergebnisse sind wenig aussagekräftig. Auch die Kriterien von Open Data werden nicht erfüllt. Um die Rechtsinformationen weiterzuverwenden, müssen die Daten erst umständlich heruntergeladen, formatiert, und bereinigt werden.

Die mehr als 4 Mio. monatlichen Besuche der Seiten zeigen die Notwendigkeit für ein neues Rechtsinformationsportal, mit dem der Umfang, die Qualität und die Recherchierbarkeit von Rechtsinformationen verbessert werden.

# Zielsetzung & Vorgehen

Im Rahmen des 12-wöchigen Fellowships war die Zielsetzung, so schnell wie möglich Mehrwert zu schaffen — menschenzentriert, agil und transparent. Ein IT-Großprojekt in Form eines U-Bootes, das nach Projektstart abtaucht und Ergebnisse erst zu Projektende sichtbar und testbar macht, sollte vermieden werden. Stattdessen sollte das Projekt lieber wie ein Delfin in kleineren Abständen auftauchen, Zwischenergebnisse mit Nutzer:innen testen, das Feedback für Verbesserungen nutzen und diese mit der Öffentlichkeit teilen.

Um das zu erreichen, hat das Team über 40 qualitative Interviews geführt. Wieso und in welchem Kontext brauchen Menschen Rechtsinformationen? Und wie sollten diese aufbereitet und dargestellt werden? Nachdem das Team besser verstanden hat, was die Menschen brauchen, wurden Prototypen entwickelt, um diese Annahmen zu testen. Relevante Stakeholder wurden involviert, Zwischenergebnisse mit der Öffentlichkeit geteilt und dabei ergebnisoffen kommuniziert.

![Mit den Bedürfnissen der Menschen starten](2_Tech4Germany_Rechtsinformationsportal_Arbeitsweise_Menschen-1.png)
![Annahmen mit Prototypen testen](3_Tech4Germany_Rechtsinformationsportal_Arbeitsweise_Prototypen-1.png)
![Transparent arbeiten](4_Tech4Germany_Rechtsinformationsportal_Arbeitsweise_Transparent-1.png)

# Erkenntnisse & Lösungen

Aus der Nutzer:innen-Recherche hat das Team drei Erkenntnisse abgeleitet, die richtungsweisend für die entsprechenden Lösungen waren:


## 1 Nutzer:innen haben wesentliche Gemeinsamkeiten bei der Vorgehensweise und den Bedürfnissen.

Alle Nutzer:innen starten ihre Recherche bei Google und suchen zu irgendeinem Zeitpunkt den Gesetzestext. Deshalb sollte im ersten Schritt ein Basisangebot für Gesetze geschaffen werden, das von Suchmaschinen gefunden wird.

Daher hat das Team eine erste funktionierende Version des Rechtsinformationsportals mit basalen Funktionalitäten für Gesetze entwickelt.


## 2 Nutzer:innen und ihre Bedürfnisse sind heterogen.

Daher sollten die Daten für die Weiterverwendung zur Verfügung gestellt werden, damit Lücken mit spezialisierten Angeboten von der Zivilgesellschaft und Privatwirtschaft geschlossen werden können.

Um das zu erreichen, hat das Team eine Datenschnittstelle zum Abruf der aktuellen Gesetze entwickelt.


## 3 Nicht die juristische Vorbildung, sondern das Sicherheitsbedürfnis ist ausschlaggebend für das Rechercheverhalten. Tiefe, Dauer, Intensität

Interesse korreliert nicht zwingend mit Expertise. Auch Menschen mit nur wenig juristischem Vorwissen möchten sich umfassend und verlässlich informieren. Daher sollten alle Rechtsinformationen kostenlos und nutzerfreundlich zugänglich gemacht werden, um allen eine tiefgehende Recherche zu ermöglichen.

Diese Vision hat das Team mit Hilfe eines Clickdummys für die Fortführung des Projektes klickbar und testbar gemacht.


# Projektergebnisse: Alpha-Version, API, Clickdummy

Die Ergebnisse zeigen die Vorteile dieser Vorgehensweise: Es konnte ein früher Mehrwert durch eine Alpha Version geschaffen werden, die für Gesetze bereits basale Nutzer:innenbedürfnisse wie z.B. eine bessere Lesbarkeit und Orientierung erfüllt. Die Datenschnittstelle bietet die Grundlage für Innovation, damit Dritte spezialisierte Angebote entwickeln können. Der Clickdummy ermöglicht es, die Annahmen und Funktionen weiter zu testen, und die Entwicklung eines vollumfänglichen Rechtsinformationsportals iterativ und nutzerzentriert fortzuführen.
![alt](5_Tech4Germany_Rechtsinformationsportal_Alpha_Suche1.png)

## Alpha-Version — Erste Version ist nach 12 Wochen live

Die Alpha Version ist eine erste funktionierende Version des Rechtsinformationsportals mit Basis-Funktionalitäten. Ziel ist es, die Machbarkeit einer iterativen Implementierung des Portals aufzuzeigen und frühzeitig Herausforderungen zu identifizieren. Es handelt sich daher nicht um ein fertiges Portal, dass Gesetze-im-Internet.de sofort ersetzen kann.


## Datenschnittstelle — Rechtsinformationen für alle

Die Schnittstelle (API) ermöglicht Dritten Zugriff auf die Daten von Gesetze-im-Internet.de. Die Zivilgesellschaft und Privatwirtschaft können das Angebot mit spezialisierten Funktionalitäten erweitern. Somit können möglichst viele der Nutzer:innengruppen befriedigt werden.
![alt](6_Tech4Germany_Rechtsinformationsportal_API.png)

## Clickdummy — Die Zukunft ist klickbar

Der Clickdummy zeigt anhand eines konkreten Beispiels die potentiellen Funktionen des zukünftigen Rechtsinformationsportals auf. Bedürfnisse der Nutzer:innen können getestet werden und helfen im Team ein gemeinsames Verständnis zu etablieren und nach außen zu kommunizieren. Der Clickdummy basiert nicht auf der Schnittstelle, und ist somit nicht funktionsfähig.
![alt](7_Tech4Germany_Rechtsinformationsportal_Clickdummy.png)

# Unsere Ergebnisse sind frei verfügbar

### Fallstudie

Die [Zusammenfassung der Ergebnisse als PDF](./f1_Tech4Germany_Fallstudie_Rechtsinformationsportal.pdf).

### Click Dummy

Die Vision des vollumfänglichen Rechtsinformationsportal ist als [Click Dummy](https://rechtsinformationsportal.webflow.io/).

### Prototyp

!!! warning "Dieser Prototyp ist nicht mehr online verfügbar"

    Der [DigitalService](https://digitalservice.bund.de/) arbeitet an einer [vollumfänglichen, offiziellen Lösung](https://digitalservice.bund.de/blog/neues-rechtsinformationssystem). Für die zwischenzeitliche Überbrückung ist möglicherweise dieses Open-Source Projekt hilfreich: [github.com/nfelger/gesetze-aus-dem-internet](https://github.com/nfelger/gesetze-aus-dem-internet).

Unsere Arbeitsergebnisse finden Sie auf GitHub: [Frontend](https://github.com/tech4germany/rechtsinfo-fe) und [API](https://github.com/tech4germany/rechtsinfo_api)

# Das Team

|                         |                         |
|:-----------------------:|:-----------------------:|
| ![alt](8_Conrad_Square.png){:class="profile-pic"} **Conrad Schlenkhoff**<br>Product Fellow | ![alt](9_Tito_Square-1280x1280.jpg){:class="profile-pic"} **José Ernesto Rodríguez**<br>Design Fellow |
| ![alt](10_Greta_Square.png){:class="profile-pic"} **Greta Fest**<br>Engineering Fellow | ![alt](11_Niko-1280x1280.jpg){:class="profile-pic"} **Niko Felger**<br>Engineering Fellow |



# Projektpartner:innen

|                         |                         |
|:-----------------------:|:-----------------------:|
| ![alt](12_Beatrix_Square-1280x1280.jpg){:class="profile-pic"} **Dr. Beatrix Lindner**<br>Projektleiterin | ![alt](13_Sabine_Square-1280x1280.jpg){:class="profile-pic"} **Sabine Schlüter**<br>Digitallotsin |
| ![alt](14_Alex_Square-1280x1280.jpg){:class="profile-pic"} **Alexander Schiff**<br>Digitallotse | ![alt](15_Kai_Square-1280x1280.jpg){:class="profile-pic"} **Kai Rülke**<br>Digitallotse |

