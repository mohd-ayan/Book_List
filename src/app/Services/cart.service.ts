import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: { [id: string]: number } = {};
  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  addToCart(bookId: string): void {
    this.cart[bookId] = (this.cart[bookId] || 0) + 1;
    this.updateCartCount();
  }

  removeFromCart(bookId: string): void {
    if (this.cart[bookId]) {
      this.cart[bookId]--;
      if (this.cart[bookId] === 0) {
        delete this.cart[bookId];
      }
      this.updateCartCount();
    }
  }

  getCart() {
    return this.cart;
  }

  private updateCartCount(): void {
    const total = Object.values(this.cart).reduce((sum, qty) => sum + qty, 0);
    this.cartCount.next(total);
  }
}
