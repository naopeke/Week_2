let myLib = require("./contacts");
let myLib2 = require("./person");

let Contacts = myLib.Contacts;
let Person = myLib2.Person;

let contacts = new Contacts();

let person1 = new Person('Juan', 170, 60, 2000, ["Videojuego", "Cine", "Moto"]);
contacts.people.push(person1);

contacts.printPersons();



// let contacts = new myLib.Contacts ();

// contacts.people.push(['Juan', 170, 60, 2000, ["Videojuego", "Cine", "Moto"]]);

// contacts.printPersons();

// let persons = [
//     new myLib.Contacts(['María', 155, 50, 1990, ["Leer", "Cine", "Viaje"]]),
//     new myLib.Contacts(['Juan', 170, 60, 2000, ["Videojuego", "Cine", "Moto"]])
// ];
//console.log(person1);

//(case1)
// let printPersons1 = person1.printPersons();

//(case2)


// for (let person of people) {
//     person.printPersons();
// }