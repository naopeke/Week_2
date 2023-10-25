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
        console.log('Name - ' + this.name);
        console.log('Height - ' + this.height);
        console.log('Weight - ' + this.weight);
        console.log('Year of Birth - ' + this.yearOfBirth);
    }

    //Reto5
    printHobbies(){
        console.log(this.name + ' - ' + this.hobbies);
    }



}

module.exports = {
    Person
};
