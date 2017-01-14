import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchCaseService } from './search-case.service';
import { Customer } from '../customer';
import { CustomerViewComponent } from '../customer-view/customer-view.component';

@Component({
  selector: 'search-case',
  templateUrl: './search-case.component.html',
  styleUrls: ['./search-case.component.css'],
  providers: [SearchCaseService, Customer, CustomerViewComponent]
})

export class SearchCaseComponent implements OnInit {
  @Output() onSearch = new EventEmitter<boolean>();
  custFound: boolean = false;
  custs: Customer[];
  customer: Customer;
  searchCaseService: SearchCaseService;
  constructor(sc: SearchCaseService) {
    this.searchCaseService = sc;
  }
  customerViewComponent: CustomerViewComponent;
  searchCriteria() {
    this.custs = this.searchCaseService.getCustomerList();
    this.customer = this.searchCaseService.getCustomer();
    if (this.custs != null) {
      this.custFound = true;
      this.onSearch.emit(this.custFound); }
  }
  ngOnInit() {
  }

}
