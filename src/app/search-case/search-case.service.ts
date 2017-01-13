import { Injectable } from '@angular/core';

@Injectable()
export class SearchCaseService {
  customers: Customer[];
  customer: Customer;
  customer1: Customer;
  constructor() {
    this.customer = new Customer("Ankit", 12121212, "Aggarwal");
    this.customer1 = new Customer("Gappu", 23232323, "Aggarwal");
    this.customers = [this.customer, this.customer1];
  }

  // Returns Customer
  getCustomer(): Customer {
    return this.customer;
  }

  // This returns list of customer
  getCustomerList(): Customer[] {
    return this.customers;
  }
}

@Injectable()
export class Customer {
  name: string;
  postalcode: number;
  lastname: string;
  constructor(na: string, pc: number, ln: string) {
    this.name = na;
    this.postalcode = pc;
    this.lastname = ln;
  }
}