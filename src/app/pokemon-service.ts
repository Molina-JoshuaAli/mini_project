import { Injectable, signal, computed } from '@angular/core';

export interface Pokemon {
  name: string;
  type: string;
  heldItem: string;
  description: string;

}

export interface MartItem {
  id: number;
  name: string;
  price: number;

}

export interface CartItem extends MartItem {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  kantoPokemon = signal<Pokemon[]>([
    {
      name: 'Charizard',
      type: 'Fire / Flying',
      heldItem: 'Charcoal',
      description: 'A powerful fire Pokémon that can melt rocks with intense flames.',
    },
    {
      name: 'Pikachu',
      type: 'Electric',
      heldItem: 'Oran Berry',
      description: 'A friendly Pokémon that stores electricity in its cheeks.',
    },
    {
      name: 'Gengar',
      type: 'Ghost / Poison',
      heldItem: 'Spell Tag',
      description: 'A tricky ghost Pokémon that hides in shadows.',
    },
    {
      name: 'Blastoise',
      type: 'Water',
      heldItem: 'Mystic Water',
      description: 'A strong water Pokémon with powerful water cannons.',
    },
    {
      name: 'Dragonite',
      type: 'Dragon / Flying',
      heldItem: 'Dragon Fang',
      description: 'A kind-hearted dragon Pokémon with immense strength.',
    },
    {
      name: 'Snorlax',
      type: 'Normal',
      heldItem: 'Leftovers',
      description: 'A huge sleepy Pokémon that loves to eat and rest.',
    }
  ]);

  johtoPokemon = signal<Pokemon[]>([
    {
      name: 'Typhlosion',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'Its fiery explosions create intense heat during battle.',
    },
    {
      name: 'Feraligatr',
      type: 'Water',
      heldItem: 'Mystic Water',
      description: 'A fierce Pokémon with powerful jaws and sharp teeth.',
    },
    {
      name: 'Meganium',
      type: 'Grass',
      heldItem: 'Miracle Seed',
      description: 'Its breath can revive dead grass and plants.',
    },
    {
      name: 'Ampharos',
      type: 'Electric',
      heldItem: 'Magnet',
      description: 'Its tail glows brightly and can be seen from far away.',
    },
    {
      name: 'Espeon',
      type: 'Psychic',
      heldItem: 'Twisted Spoon',
      description: 'It predicts attacks using its sharp psychic senses.',
    },
    {
      name: 'Umbreon',
      type: 'Dark',
      heldItem: 'Black Glasses',
      description: 'It hides in darkness and waits for the right moment to strike.',
    }
  ]);

  hoennPokemon = signal<Pokemon[]>([
    {
      name: 'Sceptile',
      type: 'Grass',
      heldItem: 'Miracle Seed',
      description: 'A fast and agile Pokémon with leaf blades on its arms.',
    },
    {
      name: 'Blaziken',
      type: 'Fire / Fighting',
      heldItem: 'Black Belt',
      description: 'Its strong legs deliver powerful kicking attacks.',
    },
    {
      name: 'Swampert',
      type: 'Water / Ground',
      heldItem: 'Soft Sand',
      description: 'A sturdy Pokémon that can drag large ships with ease.',
    },
    {
      name: 'Gardevoir',
      type: 'Psychic / Fairy',
      heldItem: 'Twisted Spoon',
      description: 'It protects its trainer with powerful psychic energy.',
    },
    {
      name: 'Flygon',
      type: 'Ground / Dragon',
      heldItem: 'Dragon Fang',
      description: 'Its wings create desert storms when it flies.',
    },
    {
      name: 'Metagross',
      type: 'Steel / Psychic',
      heldItem: 'Metal Coat',
      description: 'A super-intelligent Pokémon with four linked brains.',
    }
  ]);

  martItems = signal<MartItem[]>([
    { id: 1, name: 'Poké Ball', price: 200 },
    { id: 2, name: 'Great Ball', price: 600  },
    { id: 3, name: 'Ultra Ball', price: 800},
    { id: 4, name: 'Potion', price: 300 },
    { id: 5, name: 'Super Potion', price: 700,  },
    { id: 6, name: 'Hyper Potion', price: 1200 },
    { id: 7, name: 'Revive', price: 1500 },
    { id: 8, name: 'Antidote', price: 100 },
    { id: 9, name: 'Paralyze Heal', price: 200 },
    { id: 10, name: 'Escape Rope', price: 550 }
  ]);

  cart = signal<CartItem[]>([]);

  totalAmount = computed(() =>
    this.cart().reduce((total, item) => total + item.price * item.quantity, 0)
  );

  totalItems = computed(() =>
    this.cart().reduce((total, item) => total + item.quantity, 0)
  );

  getPokemonByRegion(region: string): Pokemon[] {
    if (region === 'kanto') return this.kantoPokemon();
    if (region === 'johto') return this.johtoPokemon();
    if (region === 'hoenn') return this.hoennPokemon();
    return [];
  }

  addToCart(item: MartItem) {
    const currentCart = [...this.cart()];
    const existingItem = currentCart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentCart.push({ ...item, quantity: 1 });
    }

    this.cart.set(currentCart);
  }

  removeFromCart(id: number) {
    const updatedCart = this.cart()
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0);

    this.cart.set(updatedCart);
  }

  clearCart() {
    this.cart.set([]);
  }
}