import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import { Contract } from '../places/Contracts/Contracts';
import { FormatResult } from '../places/Models/Result.model';

export class ValidatorInterceptor implements NestInterceptor {
  constructor(public contract: Contract) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const body = context.switchToHttp().getRequest().body;
    const valid = this.contract.Validate(body);

    console.log(valid);

    if (!valid) {
      throw new HttpException(
        new FormatResult(
          false,
          'Algo deu errado :(',
          null,
          this.contract.errors,
        ),
        HttpStatus.BAD_REQUEST,
      );
    }

    return next.handle();
  }
}
