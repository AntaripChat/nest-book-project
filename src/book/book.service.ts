import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';

@Injectable()
export class BookService {
    public books : Book[] = [];

    addBook(book:Book):string{
        this.books.push(book);
        return "Book Add "
    }
    updateBook(book:Book):string{
        let index = this.books.findIndex((data)=>{
            return data.id == book.id
        });
        this.books[index] = book;
        return "Books update"
    }
    deletBook(bookid:string):string{
        this.books = this.books.filter((book)=>{
            return book.id != bookid;
        })
        return "delete"
    }
    findAllBooks():Book[]{
        return this.books;
    }
}
