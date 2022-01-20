function init() {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Nantes&lang=fr&units=metric&appid=e7600d82a734460a8fc05666f3f03c12');

    req.onload = function () {              
            let dataBrute = req.responseText;
           
            construirePage(dataBrute);                
    }
    req.send();
}

function construirePage(data){

    today=new Date();
    let dataFormatee="<h1>Bulletin meteo du " + today.getDate()+" "+today.getMonth()+1+" "+ today.getFullYear()+ " à "+today.getHours()+ " h"+today.getMinutes()+"</h1><div class='container p-3 bg-info'><ul class='list-group'>";

      let dataJson=JSON.parse(data);
     
            dataFormatee+="<li class='list-group-item'>Temperature: " + dataJson.main.temp+"°C </li ><li class='list-group-item'>Description du temps: " + dataJson.weather[0].description +"</li><li class='list-group-item'>Pression:" + dataJson.main.pressure +"</li><li class='list-group-item'>Vitesse du vent: "+ dataJson.wind.speed +"<li class='list-group-item'>Direction du vent: "+ dataJson.wind.deg +"</li>";
           
           
           dataFormatee+="</ul></div>";
           console.log(dataFormatee);

            let zoneAffichage = document.querySelector("#resultat");
            zoneAffichage.innerHTML = dataFormatee;
          

}
