import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesService } from 'src/app/service/sales.service';

@Component({
  selector: 'app-date-dialog',
  templateUrl: './date-dialog.component.html',
  styleUrls: ['./date-dialog.component.css']
})
export class DateDialogComponent implements OnInit {

  firstemidate :Date

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private salesService : SalesService,
    public dialogRef:MatDialogRef<DateDialogComponent>
  ) { }

  ngOnInit(): void {
  }


  
  doAction(){
    this.dialogRef.close({data:this.firstemidate});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}