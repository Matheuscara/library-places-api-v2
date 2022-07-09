import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';

@Module({
  controllers: [PlacesController],
})
export class PlacesModule {}
