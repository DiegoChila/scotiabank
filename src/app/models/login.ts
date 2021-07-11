export class Login {
  success: boolean;
  errors: string[];
  token: string;
  customerId: number;

  constructor(success: boolean, errors: string[], token: string, customerId: number) {
    this.success = success;
    this.errors = errors;
    this.token = token;
    this.customerId = customerId;
  }
}
