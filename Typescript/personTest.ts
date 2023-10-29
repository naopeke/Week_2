import { Person } from './person';

let persona = new Person('Pepe', 80, 'Calle Larios 20');

persona.printName();

let birthYear = persona.yearOfBirth(2023);
console.log(`Birth Year : ${birthYear}`);

persona.setAddress('Calle Granvia 11');
const newAddress = persona.getAddress('Calle Takarazuka 29');
console.log(`New address: ${newAddress}`);
