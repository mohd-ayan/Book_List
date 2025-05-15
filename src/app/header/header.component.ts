import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartCount = 0;

constructor(private cartService: CartService) {}

ngOnInit(): void {
  this.cartService.cartCount$.subscribe(count => {
    this.cartCount = count;
  })
}

}
