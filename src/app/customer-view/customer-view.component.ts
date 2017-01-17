import { Component, OnInit, Input, Output,EventEmitter   } from '@angular/core';
import { Customer } from '../customer';
import { SearchCustomer } from '../searchcustomer';


@Component({
  selector: 'customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})

export class CustomerViewComponent implements OnInit {
  @Input() customers : Customer[];
  @Input() searchCriteria : SearchCustomer;
  @Output() onEdit = new EventEmitter<boolean>();

  selectedCustomers : Customer[];
  constructor() { 
  }
  ngOnInit() {
  }

  submitSelectedCust(){

  }

  selectCustomer(cust : Customer){
    console.log(cust);
  }

  // Event to show the seach panel and hide this panel
  goBack(){
     this.onEdit.emit(true);
  }
}
