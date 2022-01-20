function init() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://digicode.cleverapps.io/utilisateurs');

    req.onload = function () {
        let dataBrute = req.responseText;
        let zoneAffichage = document.querySelector("#resultat");
        zoneAffichage.innerHTML = dataBrute;
    }
    req.send();
}

function valider() {
    let objet = {};
    objet.nom = document.querySelector("#nom").value;
    objet.prenom = document.querySelector("#prenom").value;
    objet.dateNaissance = document.querySelector("#dateNaissance").value;
    objet.lieuNaissance = document.querySelector("#lieuNaissance").value;
    objet.departementNaissance = document.querySelector("#departementNaissance").value;
    objet.numeroRue = document.querySelector("#numeroRue").value;
    objet.libelleRue = document.querySelector("#libelleRue").value;
    objet.codePostal = document.querySelector("#codePostal").value;
    objet.ville = document.querySelector("#ville").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://digicode.cleverapps.io/utilisateurs");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(objet));
}