export interface Contract {
  errors: any[];
  Validate(model: any): boolean;
}
