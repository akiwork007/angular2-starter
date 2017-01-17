import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchCaseService } from './search-case.service';
import { Customer } from '../customer';
import { SearchCustomer } from '../searchcustomer';


@Component({
  selector: 'search-case',
  templateUrl: './search-case.component.html',
  styleUrls: ['./search-case.component.css'],
  providers: [SearchCaseService]
})

export class SearchCaseComponent implements OnInit {
  @Output() onSearch = new EventEmitter<Customer[]>();

  searchCriteria = new SearchCustomer();// Attached to form inputs
  errorMessage :string;
  errorSearch : boolean = false;

  constructor(private _searchCaseService: SearchCaseService) {
  }


  // Emit event to hide this component if Customer is found
  custList: Customer[];
  searchCustomer() {
    this.custList = this._searchCaseService.getCustomerList(this.searchCriteria);
    if (this.custList != null) {
      this.onSearch.emit(this.custList);// Emit and event 
    } else {
      this.errorSearch = true;
      this.errorMessage = "Technical Error Please Try Again";
    }
  }

  ngOnInit() {
  }

  //get diagnostic() { return JSON.stringify(this.searchCriteria); } //This is just for testing purpose
}