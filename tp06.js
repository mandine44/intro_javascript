function init() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://restcountries.com/v3.1/all');

    req.onload = function () {              
            let dataBrute = req.responseText;
            construirePage(dataBrute);                
    }
    req.send();
}

function construirePage(data){

    let dataFormatee="<ul>";
      let dataJson=JSON.parse(data);
           for (let i=0;i<dataJson.length;i++){
               let nomPays=dataJson[i].name.common;
               let capitale =dataJson[i].capital;
               let nbHabitants =dataJson[i].population;
               let region=dataJson[i].region;

               dataFormatee+="<li>"+nomPays + "<ul><li>Capitale:  "+capitale+"</li><li> Nombre d'habitants:  "+nbHabitants+"</li><li> Region: "+region +"</li></ul>";
               
           }
           dataFormatee+="</ul>";
                   

            let zoneAffichage = document.querySelector("#resultat");
            zoneAffichage.innerHTML = dataFormatee;
          

}
