import { IsString } from 'class-validator';

export class GetPokemonDTO {
  @IsString()
  readonly pokemon: string;
}
