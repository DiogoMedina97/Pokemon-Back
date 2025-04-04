import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokeService } from './poke.service';
import { PokeController } from './poke.controller';

@Module({
  imports: [HttpModule],
  providers: [PokeService],
  controllers: [PokeController],
})
export class PokeModule {}
