export class Book {
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    //método

    //title
    public setTitle(newTitle: string):void{
        this.title = newTitle;
    }

    public getTitle():string {
        return this.title
    }

    // nPages
    public setnPages(newNpages: number):void{
        this.nPages = newNpages;
    }

    public getnPages():number {
        return this.nPages
    }

    // ISBN
    public setIsbn(newIsbn: string):void{
        this.isbn = newIsbn;
    }

    public getIsbn():string {
        return this.isbn
    }

    //Author
    public setAuthor(newAuthor: string):void{
        this.author = newAuthor;
    }

    public getAuthor():string {
        return this.author
    }

    //Editorial
    public setEditorial(newEditorial: string):void{
        this.editorial = newEditorial;
    }

    public getEditorial():string {
        return this.editorial
    }

    //método toString
    public toString():string{
        return `Title - ${this.title}
        Number of Pages - ${this.nPages}
        ISBN - ${this.isbn}
        Author - ${this.author}
        Editorial - ${this.editorial}`
    }
}