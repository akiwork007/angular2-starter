import { Component, OnInit, Input, Output,EventEmitter   } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})

export class CustomerViewComponent implements OnInit {
  @Input() customers : Customer[];
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


  goBack(){
     this.onEdit.emit(true);
  }
}
