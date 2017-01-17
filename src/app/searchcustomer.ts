import { Injectable } from '@angular/core';

@Injectable()
export class SearchCustomer {
  public name: string;
  public lastname: string;
  public postalcode: number;
  public dob: number;
  constructor(){}
  
}