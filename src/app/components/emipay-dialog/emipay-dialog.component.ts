import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesitemsService } from 'src/app/service/salesitems.service';
import { DatePipe } from '@angular/common'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emipay-dialog',
  templateUrl: './emipay-dialog.component.html',
  styleUrls: ['./emipay-dialog.component.css']
})
export class EmipayDialogComponent implements OnInit {

  itemid=0
  latedays=0
  panelty:any
  netamount:any
  paydate: any;
  dueDate=new Date()
  Time:any  
  emiTrack=
  {
    "id":0,
    "date":new Date,
    "amount":0.0,

  }

  salesitem:
  {
    "id": 88,
    "qty": 990,
    "amount": 5199480.0,
    "downpayment": 800000.0,
    "due": 4399480.0,
    "emicount": 8,
    "emiamt": 582931.1,
    "paidemicount": 0,
    "unpaidemicount": 0,
    "interest": 6.0,
    "interestamt": 4663448.8,
    "firstemidate": "2021-10-28T18:30:00.000+00:00",
    "nextemidate":Date,
    "netamount": 0.0,
    map: {
        "2021-12-28T18:30:00.000+00:00": false,
        "2021-11-28T18:30:00.000+00:00": false,
        "2022-03-28T18:30:00.000+00:00": false,
        "2021-10-28T18:30:00.000+00:00": false,
        "2022-01-28T18:30:00.000+00:00": false,
        "2022-02-27T18:30:00.000+00:00": false,
        "2022-04-28T18:30:00.000+00:00": false,
        "2022-05-28T18:30:00.000+00:00": false
    },
    emimap:
    {
      "2021-12-28T18:30:00.000+00:00": 52001.23
    },
    product: {
        "id": 3,
        "name": "sdsdsd",
        "hsn": 2533,
        "mrp": 5252.0,
        "rate": 5252.0,
        "purchaseprice": 6663.0,
        "cgst": 28.0,
        "sgst": 28.0,
        "active": true
    }
}
  

 

  constructor(

    @Inject(MAT_DIALOG_DATA) public data: any,
    private salesItemService:SalesitemsService,
    public datepipe: DatePipe,
    public dialogRef: MatDialogRef<EmipayDialogComponent>
  ) { }

  ngOnInit(): void {

    this.itemid=this.data.id;
    
   this.salesItemService.getSalesItemById(this.itemid).subscribe(
      (data: any)=>
      {
        this.salesitem=data
        this.paydate=this.datepipe.transform(new Date(this.salesitem.nextemidate) , "yyyy-MM-dd");
        this.dueDate=this.paydate
       
      },
      (error:any)=>
      {
        console.log(error)
      }
    )

    
      
  
  }

//calculate latedays
calLateDays(date : Date)
{
  var date1 = new Date(this.dueDate);
  var date2 = new Date(date);
  var Time = date2. getTime() - date1. getTime();
  var Days = Time / (1000 * 3600 * 24); 
  this.latedays=Days
}


  //calculate late charge
  calLateCharge(panelty : number)
  {
    this.netamount=(this.salesitem.emiamt + (panelty * this.latedays)).toFixed(2)
    
    
  }


  //pay emi
  payEmi()
  {

   
    
    
    this.emiTrack.id=this.itemid
   
    this.emiTrack.date=this.paydate
   
    this.emiTrack.amount=this.netamount
    this.salesItemService.payEmi(this.emiTrack).subscribe(
      (data)=>
      {
        Swal.fire("Emi Paid Suucessfully" ,"Success"  ,"success")
       
        window.location.reload();
      },
      (error)=>
      {
        
        console.log(error)
      }

    )

    
  }

  //close dialog
  onCancelClick()
  {
    this.dialogRef.close();
  }

}
function MD_DIALOG_DATA(MD_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

