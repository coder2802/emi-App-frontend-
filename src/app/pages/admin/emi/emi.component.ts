import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmipayDialogComponent } from 'src/app/components/emipay-dialog/emipay-dialog.component';
import { SalesService } from 'src/app/service/sales.service';
import { DatePipe, getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  page: number = 1;
  sales :any[]=[
    {

      "id": 574,
      "customer": {
          "id": 393,
          "firstname": "Batli Medical",
          "lastname": "Retail",
          "contact": "9424800016",
          
          "address": {
              "id": 394,
              "addressLine1": "404 , near sagar juice",
              "addressLine2": "Saket Nagar",
              "postalcode": "452001",
              "city": "indore",
              "state": "Madhaya Pradesh"
          },
          
      },
      "items": [
          {
              "id": 575,
              "qty": 200,
              "amount": 10000.0,
              "netamount": 11000.0,
              "downpayment":200.0,
              "due":5.00,
              "emicount":6,
              "unpaidemicount":5,
              "emiamt":8000,
              "interest":5.5,
              "interestamt":5326.00,
              "firstemidate":Date,
              "nextemidate":Date,
              "status":false,
              "product": {
                  "id": 469,
                  "name": "hair oil",
                  "hsn": 563256,
                  "mrp": 50.0,
                  "rate": 50.0,
                  "purchaseprice": 50.0,
                  "cgst": 5.0,
                  "sgst": 5.0,
              }
          }
      ],
      "invoicedate": "2021-08-07",
      "invoiceno": 911,
      "amountTotal": 10000,
      "dueTotal": 0,
      "downpaymentTotal": 0,
      
    }
  ]

  date:Date


  sortedSales :any[]=[
    {

      "id": 574,
      "customer": {
          "id": 393,
          "firstname": "Batli Medical",
          "lastname": "Retail",
          "contact": "9424800016",
          
          "address": {
              "id": 394,
              "addressLine1": "404 , near sagar juice",
              "addressLine2": "Saket Nagar",
              "postalcode": "452001",
              "city": "indore",
              "state": "Madhaya Pradesh"
          },
          
      },
      "items": [
          {
              "id": 575,
              "qty": 200,
              "amount": 10000.0,
              "netamount": 11000.0,
              "downpayment":200.0,
              "due":5.00,
              "emicount":6,
              "unpaidemicount":5,
              "emiamt":8000,
              "interest":5.5,
              "interestamt":5326.00,
              "firstemidate":Date,
              "nextemidate":Date,
              "status":false,
              "product": {
                  "id": 469,
                  "name": "hair oil",
                  "hsn": 563256,
                  "mrp": 50.0,
                  "rate": 50.0,
                  "purchaseprice": 50.0,
                  "cgst": 5.0,
                  "sgst": 5.0,
              }
          }
      ],
      "invoicedate": "2021-08-07",
      "invoiceno": 911,
      "amountTotal": 10000,
      "dueTotal": 0,
      "downpaymentTotal": 0,
      
    }
  ]

  displaySales =[
    {

      "id": 574,
      "customer": {
          "id": 393,
          "firstname": "Batli Medical",
          "lastname": "Retail",
          "contact": "9424800016",
          
          "address": {
              "id": 394,
              "addressLine1": "404 , near sagar juice",
              "addressLine2": "Saket Nagar",
              "postalcode": "452001",
              "city": "indore",
              "state": "Madhaya Pradesh"
          },
          
      },
      "items": [
          {
              "id": 575,
              "qty": 200,
              "amount": 10000.0,
              "netamount": 11000.0,
              "downpayment":200.0,
              "due":5.00,
              "emicount":6,
              "unpaidemicount":5,
              "emiamt":8000,
              "interest":5.5,
              "interestamt":5326.00,
              "firstemidate":Date,
              "nextemidate": new Date,
              "status":false,
              "product": {
                  "id": 469,
                  "name": "hair oil",
                  "hsn": 563256,
                  "mrp": 50.0,
                  "rate": 50.0,
                  "purchaseprice": 50.0,
                  "cgst": 5.0,
                  "sgst": 5.0,
              }
          }
      ],
      "invoicedate": "2021-08-07",
      "invoiceno": 911,
      "amountTotal": 10000,
      "dueTotal": 0,
      "downpaymentTotal": 0,
      
    }
  ]

  constructor(private salesService:SalesService,
              private dialog:MatDialog,
              private router:Router,
              private datePipe: DatePipe
              ) { }

  ngOnInit(): void {

    this.salesService.getAllSales().subscribe(
      (data:any)=>
      {
        this.sales=data
        this.displaySales=data
        this.sortedSales=data

        
          
     
      },
      (error:any)=>
      {
        console.log(error)
      }
    )
  }


  //date wise sale
 

  dateWiseSale(date :Date)
  {
    this.sortedSales=this.sales.filter(function(element){
    
      return element.items.find((ele :any) => {
        const datepipe: DatePipe = new DatePipe('en-US')
        console.log(element)
        return datepipe.transform( ele.nextemidate, 'yyyy-MM-dd') == datepipe.transform(date, 'yyyy-MM-dd')     
        
      });
    })

    if(date!=null)
    this.displaySales=this.sortedSales
    else 
    this.displaySales=this.sales

    
    

  }

  //open dialog for emi payment
  openDialog(itemid:any)
  {

    let dialogRef=  this.dialog.open(EmipayDialogComponent , {
      data: {
        id: itemid,
        
      }
    });

    dialogRef.afterClosed().subscribe(result =>{

      // this.router.navigate(['/admin/emi']);
      // window.location.reload();
     
    
    })
  }
}
