
function sansParametre() {
    let a = 33;
    return a;
}
console.log(sansParametre() + "\n");

function bonjourUntel(a) {
    let salutations

    if (a != null) {
        salutations = "Bonjour  " + a;
    }
    else salutations = "Bonjour";
    return salutations;

}
console.log(bonjourUntel() + "\n");

function fonctionCalcul(a, b) {
    let resultat;
    if (typeof a == 'number' && typeof b == 'number'()) {
        resultat = a * b + a + b;
    }
    //else resultat = "Rentrez des nombres SVP";
    else throw 'Rentrez des nombres SVP';
    return resultat;
}
try {
    console.log(fonctionCalcul("deux", "trois") + "\n");
    
} catch (error) {
    console.log(error);
}


function fonctionControleTableau(array) {
    let check = true;
    if  (array.length==0){
        //check="le tableau est vide";
        throw "le tableau est vide";
    }else
    {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            check = false;
        }
    }
}
    return check;
}

let unTableau = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
try {
    console.log(fonctionControleTableau(unTableau));
} catch (error) {
    console.log(console.error);
}


let unSecondTableau = [1, 15, -3, 0, 8, 7, "trois", -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

try {
    console.log(fonctionControleTableau(unSecondTableau)); 
} catch (error) {
    console.log(console.error);
}


let unTroisiemeTableau = [];

try {
    console.log(fonctionControleTableau(unTroisiemeTableau));
} catch (error) {
    console.log(console.error);
    
}



function moyenne(array) {
    let moyenne = 0;
    let somme = 0;
    let erreur ="l'une des entrees au moins n est pas un nombre";

    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i])!== 'number'){
            return erreur;
        }
        somme += array[i];
    }
    moyenne = somme / (array.length);
    return moyenne;
}

console.log(moyenne(unTableau));
console.log(moyenne(unSecondTableau));
