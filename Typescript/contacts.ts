import { Person } from './person';

export class Contacts {
    public people : Person[];

    constructor(){
        this.people = [];
    }

        //método print Calendar
        public printCalendar():void{
            this.people.forEach(person => {
                console.log(person);
            });
        }
    }
