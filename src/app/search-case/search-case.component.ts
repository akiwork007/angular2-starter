import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchCaseService } from './search-case.service';
import { Customer } from '../customer';

@Component({
  selector: 'search-case',
  templateUrl: './search-case.component.html',
  styleUrls: ['./search-case.component.css'],
  providers: [SearchCaseService, Customer]
})

export class SearchCaseComponent implements OnInit {
  @Output() onSearch = new EventEmitter<Customer[]>();



  custList: Customer[];
  searchCaseService: SearchCaseService;

  constructor(sc: SearchCaseService) {
    this.searchCaseService = sc;
  }

  // Emit event to hide this component if Customer is found
  searchCustomer() {
    this.custList = this.searchCaseService.getCustomerList();
    if (this.custList != null) {
      this.onSearch.emit(this.custList);// Emit and event 
    }
  }

  ngOnInit() {
  }

  searchCriteria = new SearchCriteria("Ankit", "Aggarwal", 232323, 21323);
}



class SearchCriteria {
  constructor(public name?: string,
    public lastname?: string,
    public dob?: number,
    public postalcode?: number) {
  }
}