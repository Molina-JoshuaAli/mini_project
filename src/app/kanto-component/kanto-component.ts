import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service';
import { PokemonCardComponent } from '../pokemon-card-component/pokemon-card-component';

@Component({
  selector: 'app-kanto',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './kanto-component.html',
  styleUrl: './kanto-component.css'
})
export class KantoComponent {
  pokemonService = inject(PokemonService);
  pokemonList = this.pokemonService.kantoPokemon;
}