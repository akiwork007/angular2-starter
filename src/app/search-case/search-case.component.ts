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
  

  custs: Customer[];
  searchCaseService: SearchCaseService;

  constructor(sc: SearchCaseService) {
    this.searchCaseService = sc;
  }
 
  // Emit event to hide this component if Customer is found
  searchCriteria() {
    this.custs = this.searchCaseService.getCustomerList();
    if (this.custs != null) {
      this.onSearch.emit(this.custs);// Emit and event 
    }
  }


  ngOnInit() {
  }

}
