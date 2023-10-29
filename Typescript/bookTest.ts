import { Book } from './book'

let book = new Book('Introducción a Javascript', 233, '2344433-BC23333', 'Joseph Smith', 'Now Editions');

//mostrar el resulto de Book arriba.
console.log(book.toString());

//getter y setter cada elementos
book.setTitle('Clean Javascript');
let newTitle = book.getTitle();
console.log(newTitle);

book.setnPages(169);
let newNpages = book.getnPages();
console.log(newNpages);

book.setIsbn('979-8800165043');
let newIsbn = book.getIsbn();
console.log(newIsbn);

book.setAuthor('Miguel A. Gómez');
let newAuthor = book.getAuthor();
console.log(newAuthor);

book.setEditorial('Second edition');
let newEditorial = book.getEditorial();
console.log(newEditorial);


//mostrar otra vez después del cambio
console.log(book.toString());