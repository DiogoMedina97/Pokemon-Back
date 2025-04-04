export interface PokemonData {
  readonly abilities: PokemonAbility[];
  [key: string]: any;
}

interface PokemonAbility {
  readonly ability: {
    readonly name: string;
    [key: string]: any;
  }
  [key: string]: any;
}
