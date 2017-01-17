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
  @Output() onSearchCreteria = new EventEmitter<SearchCustomer>();


  searchCriteria = new SearchCustomer();// Attached to form inputs
  errorMessage: string;
  errorSearch: boolean = false;

  constructor(private _searchCaseService: SearchCaseService) {
  }


  // Emit event to hide this component if Customer is found
  custList: Customer[];
  searchCustomer() {
    console.log(this.searchCriteria);
    if ((this.searchCriteria.name != null && this.searchCriteria.dob != null && this.searchCriteria.postalcode != null)
      || (this.searchCriteria.dob != null && this.searchCriteria.lastname != null && this.searchCriteria.postalcode != null)
      || (this.searchCriteria.lastname != null && this.searchCriteria.name != null && this.searchCriteria.postalcode != null)
      || (this.searchCriteria.lastname != null && this.searchCriteria.name != null && this.searchCriteria.dob != null)) {
      this.custList = this._searchCaseService.getCustomerList(this.searchCriteria);
      console.log(this.custList);
      if (this.custList != null) {
        this.onSearch.emit(this.custList);// Emit and event 
        this.onSearchCreteria.emit(this.searchCriteria);// Emit and event 
      } else {
        this.errorSearch = true;
        this.errorMessage = "Technical Error Please Try Again";
      }
    }
    else {
      this.errorSearch = true;
      this.errorMessage = "Atleast Three Field Should be entered before search";
    }
  }

  ngOnInit() {
  }

  //get diagnostic() { return JSON.stringify(this.searchCriteria); } //This is just for testing purpose
}