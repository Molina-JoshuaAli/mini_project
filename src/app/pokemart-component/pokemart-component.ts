import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service';
import { CartSummaryComponent } from '../cart-summary-component/cart-summary-component';

@Component({
  selector: 'app-pokemart',
  standalone: true,
  imports: [CartSummaryComponent],
  templateUrl: './pokemart-component.html',
  styleUrl: './pokemart-component.css'
})
export class PokemartComponent {
  pokemonService = inject(PokemonService);

  items = this.pokemonService.martItems;
  cart = this.pokemonService.cart;
  totalAmount = this.pokemonService.totalAmount;

  add(item: any) {
    this.pokemonService.addToCart(item);
  }

  remove(id: number) {
    this.pokemonService.removeFromCart(id);
  }

  clearCart() {
    this.pokemonService.clearCart();
  }
}