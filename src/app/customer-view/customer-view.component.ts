import { Component, OnInit, Input  } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})

export class CustomerViewComponent implements OnInit {
  @Input() customers : Customer[];
  constructor() { 
  }

  ngOnInit() {
  }
}
