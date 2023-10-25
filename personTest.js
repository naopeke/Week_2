let myLib = require("./person");


let person1 = new myLib.Person ('María', 155, 50, 1990, ["Leer", "Cine", "Viaje"]);
console.log(person1)

let IMC1 = person1.calcIMC();
console.log(IMC1);

let edad1 = person1.calcAge(2023);
console.log(edad1);

let printAll1 = person1.printAll();

let printHobbies1 = person1.printHobbies();