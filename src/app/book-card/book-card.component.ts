import { Component, Input } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input() book: any;
  cart: { [id: string]: number } = {};

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
  
  addToCart(bookId: string): void {
    this.cartService.addToCart(bookId);
  }
  
  removeFromCart(bookId: string): void {
    this.cartService.removeFromCart(bookId);
  }


}
