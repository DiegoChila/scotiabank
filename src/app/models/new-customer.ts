import { Customer } from "./customer";

export class NewCustomer {
  success: boolean;
  errors: string[];
  customer: Customer;

  constructor(success: boolean, errors: string[], customer: Customer) {
    this.success = success;
    this.errors = errors;
    this.customer = customer;
  }
}
