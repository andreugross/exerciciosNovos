
const books = require("./libraries");

//  5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
//
function everyoneWasBornOnSecXX() {
const bornXX = books.every((autoras)=> {
   return autoras.author.birthYear >= 1901  && autoras.author.birthYear <= 2000;
})
return bornXX;
}
console.log(everyoneWasBornOnSecXX(books))
  