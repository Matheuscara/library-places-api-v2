import { Module } from '@nestjs/common';
import { PlacesModule } from './places/places.module';
// import { Places } from './places';
import { PlacesProdider } from './places/Providers/places.prodider';

@Module({
  imports: [PlacesModule],
  controllers: [],
  providers: [PlacesProdider],
})
export class AppModule {}
