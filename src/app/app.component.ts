import { Component } from '@angular/core';
import { Customer } from './customer';
import { SearchCaseService } from './search-case/search-case.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchCaseService]
})

export class AppComponent {
  searchpage: boolean = true;
  customerpage: boolean = false; 
  customers: Customer[];
  constructor(sc: SearchCaseService) {
    this.customers = sc.getCustomerList();
  }

  onSearch(custf: boolean) {
    console.log(custf);
    if(custf){
      this.searchpage = false;
      this.customerpage = true;
    }
  }


}