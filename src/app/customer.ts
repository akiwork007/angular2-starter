import { Injectable } from '@angular/core';

@Injectable()
export class Customer {
  custid : number;
  name: string;
  lastname: string;
  status: string;
  constructor(cid : number, na : string,la : string , st : string){
    this.custid = cid;
    this.name = na;
    this.lastname = la;
    this.status = st;
  }
}