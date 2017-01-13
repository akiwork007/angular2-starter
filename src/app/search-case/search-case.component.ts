import { Component, OnInit } from '@angular/core';
import { SearchCaseService } from './search-case.service';

@Component({
  selector: 'search-case',
  templateUrl: './search-case.component.html',
  styleUrls: ['./search-case.component.css'],
  providers: [SearchCaseService]
})
export class SearchCaseComponent implements OnInit {
  custs: string[];

  constructor(searchCaseService: SearchCaseService) {
    this.custs = searchCaseService.getCustomers();
  }
  firstname : string;
  searchCriteria(firstname){
    console.log(firstname);
  }
  ngOnInit() {
  }

}
