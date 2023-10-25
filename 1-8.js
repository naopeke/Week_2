
//Reto1
class Person
{
    //constructor
    constructor (name, height, weight, yearOfBirth, hobbies){
        this.name = name;
        this.height = height;
        this.weight = weight;
        //Reto3: método edad
        this.yearOfBirth = yearOfBirth;
        //Reto5: método hobbies
        this.hobbies = hobbies;
    }
    //Reto2: método IMC
    calcIMC(){
        return this.weight / (this.weight * this.height) *10000;
    }

    //Reto3: método edad
    calcAge(currentYear){
        return currentYear - this.yearOfBirth;
    }

    //Reto4: método printAll
    printAll(){
        console.log('Name is: ' + this.name);
        console.log(this.name + ' - ' + this.height);
        console.log(this.name + ' - ' + this.height);
        console.log(this.name + ' - ' + this.yearOfBirth);
    }

    //Reto5
    printHobbies(){
        console.log(this.name + ' - ' + this.hobbies);
    }



}


//Reto7
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




