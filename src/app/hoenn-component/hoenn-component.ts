import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service';
import { PokemonCardComponent } from '../pokemon-card-component/pokemon-card-component';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './hoenn-component.html',
  styleUrl: './hoenn-component.css'
})
export class HoennComponent {
  pokemonService = inject(PokemonService);
  pokemonList = this.pokemonService.hoennPokemon;
}