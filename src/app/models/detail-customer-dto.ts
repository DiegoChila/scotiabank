import { DetailCustomer } from "./detail-customer";

export class DetailCustomerDto {
  success: boolean;
  errors: string[];
  detailCustomer: DetailCustomer;

  constructor(success: boolean, errors: string[], detailCustomer: DetailCustomer) {
    this.success = success;
    this.errors = errors;
    this.detailCustomer = detailCustomer;
  }
}
