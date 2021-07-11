export class Customer {
  customerId: number;
  documentNumber: string;
  password: string;

  constructor(customerId: number, documentNumber: string, password: string) {
    this.customerId = customerId;
    this.documentNumber = documentNumber;
    this.password = password;
  }
}
