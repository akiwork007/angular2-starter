import { Component } from '@angular/core';
import { Customer } from './customer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchpage: boolean = true;
  customerpage: boolean = false;

  customers: Customer[];

  constructor() {
  }


  //Event emited by the seach panel to enable the customer list panel
  onSearch(custList: Customer[]) {
    this.customers = custList;
    this.searchpage = false;
    this.customerpage = true;
  }


  //Emited by Customer View to enable the search component
  editSearch(flag: boolean) {
    this.searchpage = flag;
    this.customerpage = !flag;
  }


}