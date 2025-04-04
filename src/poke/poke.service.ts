import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { PokemonData } from './poke.interface';

@Injectable()
export class PokeService {
  constructor(private readonly httpService: HttpService) {}

  public async getPokemon(pokemon: string) {
    try {
      const response: AxiosResponse<PokemonData> = await firstValueFrom(
        this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`),
      );

      const { abilities } = response.data;

      return abilities.map(({ ability }) => ability.name);
    } catch (error) {
      const axiosError = error as AxiosError;
      throw new HttpException(axiosError.response?.data ?? 'Not found', axiosError.response?.status ?? 404);
    }
  }
}
