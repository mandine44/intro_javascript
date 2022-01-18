let societe = {
    "nom": "google",
    "siege social": "Googleplex, Mountain View, California, United States",
    "fondateurs": [
        {
            "nom":"Page",
        "prenom":"Larry",
        "date de naissance":"26/03/1973",
        "lieu de naissance":"East Lansing, Michigan"
        },
        {
            "nom":"Brin",
        "prenom":"Sergey",
        "date de naissance":"21/08/1973",
        "lieu de naissance":"Moscou, Union sovietique"

        }
    ],
    "CA": [
        {
            "annee": 2008,
            "chiffre_d_affaire": 16.49
        },
        {
            "annee": 2012,
            "chiffre_d_affaire": 37.97
        },
        {
            "annee": 2016,
            "chiffre_d_affaire": 89.46
        },
        {
            "annee": 2018,
            "chiffre_d_affaire": 136.2
        }
    ]
}
for (let i=0;i<2;i++){
    console.log(societe.fondateurs[i].nom + " " +societe.fondateurs[i].prenom +" " + societe.fondateurs[i]["date de naissance"] +" " + societe.fondateurs[i]["lieu de naissance"]);
}

for (let i=0;i<4;i++){
    console.log(societe.CA[i].annee + " " +societe.CA[i].chiffre_d_affaire);
}