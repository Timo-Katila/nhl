###
Jatketaan kehitystä Nhl_English repossa
Vercel: https://nhl-english.vercel.app/
### Ajatuksia
Käännetään koko homma Englanniksi, muuttujia myöten.
Ulkoasua viilataan kun toiminnot on saatu valmiiksi. (<body> jäätaustakuva?) 



### Sarjataulukko

Lisätty joukkuetilastoon ranking taulu. Poistettu suffiksi sijoitusten numeroista Object.entriesin ja mappauksen avulla.

Sarjataulukon useEffectin pitäisi nyt toimia moitteettomasti. Infinite Loop korjattu tekemällä
callback: setDivisions(setDivisionsData => ({...setDivisionData, joukkue : joukkueet, data : dataa })) tyylisesti.

Seuraillaan toimintaa...

### Joukkuesivu

Joukkueet lisätty. Pelaajasivu vielä kesken
