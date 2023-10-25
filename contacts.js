class Contacts {
    //constructor
    constructor([name, height, weight, yearOfBirth, hobbies]) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;

    }

    //método printPersons

 //no funciona↓ (case1)
//     printPersons() {
//         console.log(['Name -' + this.name,
//         'Height - ' + this.height,
//         'Weight - ' + this.weight,
//         'Year of Birth - ' + this.yearOfBirth]);
//     }
// }

//(case2)
    printPersons(){
        console.log(`Name - ${this.name}`);
        console.log(`Height - ${this.height}`);
        console.log(`Weight - ${this.weight}`);
        console.log(`Year of Birth - ${this.yearOfBirth}`);
        console.log(`Hobbies - ${this.hobbies}`);
    }
}





module.exports = {
    Contacts
};
