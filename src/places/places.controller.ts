import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { ValidatorInterceptor } from 'src/Interceptors/Validator.Interceptor';
import { PlacesContracts } from './Contracts/Places.Contracts';
import { Places } from './Models/Places.models';
import { FormatResult } from './Models/Result.model';

@Controller('v2/places')
export class PlacesController {

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new PlacesContracts()))
  @ApiBody({ type: Places })
  PostPlaces(@Body() place: Places): FormatResult<Places> {
    const { latitude, longitude, radius, typeOff } = place;

    return new FormatResult(true, 'places return', place, null);
  }
}
