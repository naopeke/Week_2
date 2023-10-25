let myLib = require("./contacts");

let person1 = new myLib.Contacts(['Juan', 170, 60, 2000, ["Videojuego", "Cine", "Moto"]]);

let persons = [
    new myLib.Contacts(['María', 155, 50, 1990, ["Leer", "Cine", "Viaje"]]),
    new myLib.Contacts(['Juan', 170, 60, 2000, ["Videojuego", "Cine", "Moto"]])
];
//console.log(person1);

//(case1)
// let printPersons1 = person1.printPersons();

//(case2)


for (let person of persons) {
    person.printPersons();
}