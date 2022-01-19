function plusGrandeDate(d1, d2){
    if((d2.getTime() - d1.getTime()) / 31536000000<0){
        return d1;
    }
        else return d2;
    };


let date1=new Date(1990,02,23);
let date2=new Date(1980,01,20);

console.log(plusGrandeDate(date1,date2));

function age(dateNaissance)
{
  let annees = new Number((new Date().getFullYear() - dateNaissance.getFullYear()) );
  let mois =  new Number((new Date().getMonth() - dateNaissance.getMonth()) );
 
  console.log("vous avez: "+ annees + "ans et " + mois + "mois");
}

age(date2);

