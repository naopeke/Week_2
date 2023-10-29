import { Book } from './book';

export class Library {
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books:Book[], address:string, manager:string){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

 
    //método

    //setter y getter of Address
    public setAddress(newAddress: string):void{
        this.address = newAddress;
    }

    public getAddress():string {
        return this.address
    }

    //setter y getter of Manager
    public setManager(newManager: string):void{
        this.manager = newManager;
    }

    public getManager():string {
        return this.manager
    }

    //toString
    public toString():string{
        let result = '';
        for (let i = 0; i < this.books.length; i++){
            result = result + `Book ${i+1}: ${this.books[i].toString()}\n`
        }
        return result;
    }

    //     return `Title - ${this.title}
    //     Number of Pages - ${this.nPages}
    //     ISBN - ${this.isbn}
    //     Author - ${this.author}
    //     Editorial - ${this.editorial}`
    //

    //método get number of books
    public getNumberOfBooks():number{
        return this.books.length;
    }


    // //método find by author
    public findByAuthor (author:string):Book[]{
        return this.books.filter(book => book.getAuthor() === author);
    }

}
