export class DetailCustomer {
  costumerId: number;
  name: string;
  lastname: string;
  address: string;
  phone: string;
  profession: string;

  constructor(costumerId: number, name: string, lastname: string, address: string, phone: string, profession: string) {
    this.costumerId = costumerId;
    this.name = name;
    this.lastname = lastname;
    this.address = address;
    this.phone = phone;
    this.profession = profession;
  }

  setCustomerId(customerId: number) {
    this.costumerId = customerId;
  }
}
