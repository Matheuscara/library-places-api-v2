export class FormatResult<T> {
  constructor(
    public sucess: boolean,
    public message: string,
    public data: T,
    public errors: any,
  ) {}
}
