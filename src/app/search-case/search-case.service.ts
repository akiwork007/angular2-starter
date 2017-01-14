import { Injectable } from '@angular/core';
import { Customer } from '../customer'

@Injectable()
export class SearchCaseService {
  customers: Customer[];
  customer: Customer;
  customer1: Customer;
  customer2: Customer;
  customer3: Customer;
  customer4: Customer;


  constructor() {
    this.customer = new Customer(12121, "Ankit", "Aggarwal", "Active");
    this.customer1 = new Customer(23232, "Gappu", "Gippi", "Active");
    this.customer2 = new Customer(34343, "Amir", "Khan", "Active");
    this.customer3 = new Customer(45454, "Amit", "Bachan", "Active");
    this.customer4 = new Customer(65656, "Sachin", "Tendulkar", "Active");
    this.customers = [this.customer, this.customer1, this.customer2, this.customer3, this.customer4];
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
