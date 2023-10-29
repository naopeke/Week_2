import { Contacts } from './contacts';
import { Person } from './person';

let contacts = new Contacts();
contacts.people.push(new Person('pepe', 80, 'Calle Larios 20'));
contacts.people.push(new Person('alicia', 25, 'Calle Granvia 10'));
contacts.people.push(new Person ('miguel', 51, 'Calle Echegaray 22'));

contacts.printCalendar();