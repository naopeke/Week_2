export class Person {
    public name : string;
    public age : number;
    private address : string;

    constructor(name:string, age:number, address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

        //método print Name
        public printName():void{
            console.log(this.name)
        }

        //método Year of Birth
        public yearOfBirth(currentYear: number):number{
            return currentYear - this.age
        }

        //método 書き込み専用 setter address
        public setAddress(newAddress: string):void{
            this.address = newAddress;
        }

        //método 読み取り専用 getter address
        public getAddress():string {
            return this.address
        }
    }
