import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';
@Controller('book')
export class BookController {
    constructor(private bookService:BookService){}

    @Get()
    getAllBookS():Book[]{
        return this.bookService.findAllBooks()
    }

    @Post()
    addBooks(@Body() book:Book):string{
        return this.bookService.addBook(book);
    }
}
