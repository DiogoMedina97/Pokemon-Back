import { Controller, Get, Inject, Param } from '@nestjs/common';

import { GetPokemonDTO } from './poke.dto';
import { PokeService } from './poke.service';

@Controller('api/pokemons')
export class PokeController {
  constructor(@Inject() private readonly pokeService: PokeService) {}

  @Get(':pokemon')
  public getPokemon(@Param() { pokemon }: GetPokemonDTO) {
    return this.pokeService.getPokemon(pokemon);
  }
}
