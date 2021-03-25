### Sarjataulukko

Joukkueet sivu tehty alustavasti.

Lisätty joukkuetilastoon ranking taulu. Poistettu suffiksi sijoitusten numeroista Object.entriesin ja mappauksen avulla.

Sarjataulukon useEffectin pitäisi nyt toimia moitteettomasti. Infinite Loop korjattu tekemällä
callback: setDivisions(setDivisionsData => ({...setDivisionData, joukkue : joukkueet, data : dataa })) tyylisesti.

Seuraillaan toimintaa...
