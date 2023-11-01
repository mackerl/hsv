document.getElementById('turnierForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const spielmodus = document.getElementById('spielmodus').value;
    const spieleranzahl = document.getElementById('spieleranzahl').value;
    const banner = document.getElementById('banner').files[0];
    const flyer = document.getElementById('flyer').files[0];

    console.log('Turnierdatum:', date);
    console.log('Spielmodus:', spielmodus);
    console.log('Anzahl Spieler:', spieleranzahl);
    console.log('Vereinsbanner:', banner ? banner.name : 'Nicht hochgeladen');
    console.log('Flyer:', flyer ? flyer.name : 'Nicht hochgeladen');

    // Hier würdest du normalerweise den Code zum Senden der Daten an deinen Server einfügen.
});
