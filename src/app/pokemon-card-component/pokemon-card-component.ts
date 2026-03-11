import { Component, input } from '@angular/core';
import { Pokemon } from '../pokemon-service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  templateUrl: './pokemon-card-component.html',
  styleUrl: './pokemon-card-component.css'
})
export class PokemonCardComponent {
  pokemon = input.required<Pokemon>();
}