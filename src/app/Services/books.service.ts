import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  ApiUrl='https://www.googleapis.com/books/v1/volumes?q=fouling'

  constructor(private http: HttpClient) {}

  getBooks(query: string = 'fouling'): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}${query}`);
  }
}
