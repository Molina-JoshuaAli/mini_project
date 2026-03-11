import { Component, input, output } from '@angular/core';
import { CartItem } from '../pokemon-service';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  templateUrl: './cart-summary-component.html',
  styleUrl: './cart-summary-component.css'
})
export class CartSummaryComponent {
  cartItems = input.required<CartItem[]>();
  totalAmount = input.required<number>();
  clearCartClicked = output<void>();

  clearCart() {
    this.clearCartClicked.emit();
  }
}