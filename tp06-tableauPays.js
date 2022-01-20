function init() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://digicode.cleverapps.io/json/pays/pollution');

    req.onload = function () {              
            let dataBrute = req.responseText;
            construirePage(dataBrute);                
    }
    req.send();
}

function construirePage(data){

    let dataFormatee="<table class='table table-bordered table-striped'><thead class='thead-dark text-center'><tr><th>Nom</th><th>valeur</th><th>pourcentage</th></tr></thead><tbody>";
      let dataJson=JSON.parse(data);
      for (let i = 0; i <dataJson.pays.length; i++) {
        let uneLigne = ("<tr><td><img src=https://flagcdn.com/16x12/"+ dataJson.pays[i].code+ ".png> "+ dataJson.pays[i].nom +"</td><td class='text-end'> "+dataJson.pays[i].valeur +"</td><td class='text-end'> "+ dataJson.pays[i].pourcentage +"</td></tr>");
        dataFormatee+= uneLigne;
    }
    dataFormatee+="</tbody></table>";
                   

            let zoneAffichage = document.querySelector("#resultat");
            zoneAffichage.innerHTML = dataFormatee;
          

}
