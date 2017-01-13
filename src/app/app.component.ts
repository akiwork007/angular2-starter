import { Component } from '@angular/core';
import { Customer } from './search-case/search-case.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [Customer]
})

export class AppComponent {
  searchpage: boolean = true;
  customerpage: boolean = false;
  // constructor() {
  //   this.customerpage = true;
    
  // }


  // customer : Customer;
  // populateCustomer(cust : Customer){
  //   this.searchpage = false;
  //   this.customer = cust;
  //   if(this.customer != undefined)
  //     this.customerpage = true;

  // }


}