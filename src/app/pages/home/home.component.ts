import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmipayDialogComponent } from 'src/app/components/emipay-dialog/emipay-dialog.component';
import { SalesService } from 'src/app/service/sales.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  totalSale:number
  totalPaid:number
  totalDue:number
  countSale:number

  sales =[
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


  currentMonthSale =[
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
              private dialog:MatDialog
              ) { }

  ngOnInit(): void {

    this.totalSale=0
    this.totalPaid=0
    this.totalDue=0

    this.salesService.getAllSales().subscribe(
      (data:any)=>
      {
        this.sales=data
       
        this.sales.forEach(sale =>
          {
            this.totalSale+=sale.amountTotal;
            this.totalPaid+=sale.downpaymentTotal
            this.totalDue+=sale.dueTotal
    
          })

          this.currentMonthSale=this.sales.filter(function(element){
    
            return element.items.find((ele :any) => {
              const datepipe: DatePipe = new DatePipe('en-US')
              return datepipe.transform( ele.nextemidate, 'yyyy-MM-dd') == datepipe.transform(new Date(), 'yyyy-MM-dd')     
              
            });
          })

          this.countSale=this.currentMonthSale.length
      },
      (error:any)=>
      {
        console.log(error)
      }
    )
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


