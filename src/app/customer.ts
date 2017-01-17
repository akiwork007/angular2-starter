import { Injectable } from '@angular/core';

@Injectable()
export class Customer {
  constructor(
    public custid?: number
    , public name?: string
    , public lastname?: string
    , public status?: string
    , public postalcode?: number
    , public dob?: number) {// ? is used for optional 
  }
}