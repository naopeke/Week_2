import { Book } from './book';
import { Library } from './library';

let book1 = new Book ('Introducción a Javascript', 233, '2344433-BC23333', 'Joseph Smith', 'Now Editions');
let book2 = new Book ('Clean Javascript', 169, '979-8800165043', 'Miguel A. Gómez', 'Second edition');

let library = new Library ([book1, book2], 'Calle Paris 12', 'Ale Santz');

console.log(library.toString());

console.log(library.getNumberOfBooks());

//find by author
let author = 'Miguel A. Gómez';
console.log('Result of Search by Author :\n' + library.findByAuthor(author));