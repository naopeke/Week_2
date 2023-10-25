
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



