import { Places } from '../Models/Places.models';
import { Contract } from './Contracts';
import { Flunt } from '../../utils/flunt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesContracts implements Contract {
  errors: any[];

  Validate(place: Places): boolean {
    const flunt = new Flunt();

    //Latitude
    flunt.hasMinLen(place.latitude, 1, 'Latitude Invalido');
    flunt.hasStringType(place.latitude, 'Latitude com Tipo Incorreto');

    //Longitude
    flunt.hasMinLen(place.longitude, 1, 'Longitude Invalido');
    flunt.hasStringType(place.longitude, 'Longitude com Tipo Incorreto');

    //Radios
    flunt.hasMinLen(place.radius, 2, 'Radius Invalido');
    flunt.hasNumberType(place.radius, 'Radius com Tipo Incorreto');

    //TypeOff
    flunt.hasMinLen(place.typeOff, 1, 'TypeOff Invalido');
    flunt.hasStringType(place.typeOff, 'TypeOff com Tipo Incorreto');

    this.errors = flunt.errors;

    return flunt.isValid();
  }
}
