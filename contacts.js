let myLib = require("./persons");

class Contacts {
    //constructor
    // constructor([name, height, weight, yearOfBirth, hobbies]) {
    //     this.name = name;
    //     this.height = height;
    //     this.weight = weight;
    //     this.yearOfBirth = yearOfBirth;
    //     this.hobbies = hobbies;

    // }
    constructor(){
        this.people = [];
    }

    //método printPersons

    printPersons(){
        this.people.forEach(function (person){
            console.log('Name - ' + person.name);
            console.log('Height - ' + person.height);
            console.log('Weight - ' + person.weight);
            console.log('Year of Birth - ' + person.yearOfBirth);
            console.log('Hobbies - ' + person.hobbies);
            console.log('IMC - ' + person.calcIMC());
            console.log('Age - ' + person.calcAge());

        })
    }
}

//     printPersons(){
//         this.people.forEach(function(personArr){
//             let name = personArr [0];
//             let height = personArr[1];
//             let weight = personArr[2];
//             let yearOfBirth =  personArr[3];
//             let hobbies = personArr[4];

//             console.log('Name - ' + name);
//             console.log('Height - ' + height);
//             console.log('Weight - ' + weight);
//             console.log('Year of Birth - ' + yearOfBirth);
//             console.log('Hobbies - ' + hobbies)
//         });
//     }
// }
 //no funciona↓ (case1)
//     printPersons() {
//         console.log(['Name -' + this.name,
//         'Height - ' + this.height,
//         'Weight - ' + this.weight,
//         'Year of Birth - ' + this.yearOfBirth]);
//     }
// }

//(case2)
//     printPersons(){
//         console.log(`Name - ${this.name}`);
//         console.log(`Height - ${this.height}`);
//         console.log(`Weight - ${this.weight}`);
//         console.log(`Year of Birth - ${this.yearOfBirth}`);
//         console.log(`Hobbies - ${this.hobbies}`);
//     }
// }





module.exports = {
    Contacts
};
