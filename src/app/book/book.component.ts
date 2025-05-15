import { Component } from '@angular/core';
import { BooksService } from '../Services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  
  books: any[] = [];
  allBooks: any[] = [];
  filter_value: string = '';
  loading: boolean = false;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.search_Books();
  }

  search_Books(): void {
    this.loading = true;
    this.booksService.getBooks(this.filter_value).subscribe((data) => {
      this.allBooks = data.items || [];
      this.books = [...this.allBooks]
      this.loading = false;
    }, () => {
      this.books = [];
      this.loading = false;
    });
  }

  filter_Books() {
    const lower = this.filter_value.toLowerCase();
    this.books = this.allBooks.filter((book) =>{
    return  book.volumeInfo?.title?.toLowerCase().includes(lower) || book.volumeInfo?.authors?.join(',').toLowerCase().includes(lower)
    });
  }
}
