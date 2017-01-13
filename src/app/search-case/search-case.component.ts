import { Component, OnInit } from '@angular/core';
import { SearchCaseService } from './search-case.service';
import { Customer } from './search-case.service';
import { CustomerViewComponent } from '../customer-view/customer-view.component';

@Component({
  selector: 'search-case',
  templateUrl: './search-case.component.html',
  styleUrls: ['./search-case.component.css'],
  providers: [SearchCaseService, Customer , CustomerViewComponent]
})

export class SearchCaseComponent implements OnInit {
  custs: Customer[];
  customer : Customer;
  
  constructor(searchCaseService: SearchCaseService) {
    this.custs = searchCaseService.getCustomerList();
    this.customer = searchCaseService.getCustomer();
  }
  customerViewComponent : CustomerViewComponent;
  searchCriteria(firstname){
    //this.customerViewComponent.addCustomer(this.customer);
    console.log(this.custs);
    console.log(this.customer.name);
  }
  ngOnInit() {
  }

}
