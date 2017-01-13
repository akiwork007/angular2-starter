import { Injectable } from '@angular/core';

@Injectable()
export class SearchCaseService {

  getCustomers(): string[] {
    return ["Ankit", "Aggarwal"];
  }


}

export class Customer {
  name: string;
  postalcode: number;
  lastname: string;
}