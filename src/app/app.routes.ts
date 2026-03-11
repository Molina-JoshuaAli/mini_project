import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { KantoComponent } from './kanto-component/kanto-component';
import { JohtoComponent } from './johto-component/johto-component';
import { HoennComponent } from './hoenn-component/hoenn-component';
import { PokemartComponent } from './pokemart-component/pokemart-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kanto', component: KantoComponent },
  { path: 'johto', component: JohtoComponent },
  { path: 'hoenn', component: HoennComponent },
  { path: 'pokemart', component: PokemartComponent },
  { path: '**', redirectTo: '' }
];