import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service';
import { PokemonCardComponent } from '../pokemon-card-component/pokemon-card-component';

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './johto-component.html',
  styleUrl: './johto-component.css'
})
export class JohtoComponent {
  pokemonService = inject(PokemonService);
  pokemonList = this.pokemonService.johtoPokemon;
}