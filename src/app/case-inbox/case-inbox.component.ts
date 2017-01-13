import { Component, OnInit } from '@angular/core';


const CASEDETAILS: casedetail[] = [
	{ srno: 1, caseid: 121212, caseref: 'abc', status: 'done', owner: 'Me' },
	{ srno: 2, caseid: 232323, caseref: 'def', status: 'done', owner: 'Me' },
	{ srno: 3, caseid: 343434, caseref: 'xyz', status: 'done', owner: 'Me' }
];

@Component({
	selector: 'app-case-inbox',
	templateUrl: './case-inbox.component.html',
	styleUrls: ['./case-inbox.component.css']
})

export class CaseInboxComponent implements OnInit {

	casedetails = CASEDETAILS;
	constructor() {
	}

	ngOnInit() {
	}

}


export class casedetail{

}


