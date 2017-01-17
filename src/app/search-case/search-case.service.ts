import { Injectable } from '@angular/core';
import { Customer } from '../customer';
import { SearchCustomer } from '../searchcustomer';

@Injectable()
export class SearchCaseService {
  customers: Customer[];
  customer: Customer;
  customer1: Customer;
  customer2: Customer;
  customer3: Customer;
  customer4: Customer;


  constructor() {}

  // This returns list of customer
  getCustomerList(searchCriteria : SearchCustomer): Customer[] {
    if(searchCriteria.name == 'A'){
      this.customer = new Customer(12121, "Ankit", "Aggarwal", "Active");
      this.customer1 = new Customer(23232, "Amita", "Gippi", "Active");
      this.customer2 = new Customer(34343, "Amir", "Khan", "Active");
      this.customer3 = new Customer(45454, "Anuj", "Bachan", "Active");
      this.customer4 = new Customer(65656, "Abhi", "Tendulkar", "Active");
      this.customers = [this.customer, this.customer1, this.customer2, this.customer3, this.customer4];
    }else if(searchCriteria.name == 'B'){
      this.customer = new Customer(12121, "Bnni", "Pinni", "Active");
      this.customer1 = new Customer(23232, "Banke", "Bhiari", "Active");
      this.customer2 = new Customer(34343, "Bunker", "Sing", "Active");
      this.customer3 = new Customer(45454, "Binku", "Bachan", "Done");
      this.customer4 = new Customer(65656, "Bin ", "Laden", "Dead");
      this.customers = [this.customer, this.customer1, this.customer2, this.customer3, this.customer4];
    }
    
    return this.customers;
  }
}
