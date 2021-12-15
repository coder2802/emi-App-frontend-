import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ledger-print',
  templateUrl: './ledger-print.component.html',
  styleUrls: ['./ledger-print.component.css']
})
export class LedgerPrintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("ledger")
  }

}
