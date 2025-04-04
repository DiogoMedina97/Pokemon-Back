import { Injectable } from '@nestjs/common';

@Injectable()
export class PokeService {
  public getPokemon(pokemon: string) {
    return `Hello ${pokemon}`;
  }
}
