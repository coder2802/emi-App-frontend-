import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/service/sales.service';

@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.css']
})
export class ViewSalesComponent implements OnInit {


  date:Date
  totalSale:number
  totalPaid:number
  totalDue:number
  page : number=1

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
              "emiamt":8000,
              "interest":5.5,
              "interestamt":5326.00,
              "firstemidate":Date,
              "lastemidate":Date,
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
              "emiamt":8000,
              "interest":5.5,
              "interestamt":5326.00,
              "firstemidate":Date,
              "lastemidate":Date,
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
              "emiamt":8000,
              "interest":5.5,
              "interestamt":5326.00,
              "firstemidate":Date,
              "lastemidate":Date,
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

  totalLength=0
  lastinvoiceno=0

  constructor(private salesService:SalesService) { }

  ngOnInit(): void {

    this.totalSale=0
    this.totalPaid=0
    this.totalDue=0

    this.salesService.getAllSales().subscribe(
      (data:any)=>
      {
        this.sales=data
        this.displaySales=data
        this.sortedSales=data

        this.totalLength=data.length; 
        
        this.lastinvoiceno=(this.sales[0].invoiceno) 
        


        this.displaySales.forEach(sales =>
          {
            this.totalSale+=sales.amountTotal;
            this.totalPaid+=sales.downpaymentTotal
            this.totalDue+=sales.dueTotal
    
          })
     
      },
      (error:any)=>
      {
        console.log(error)
      }
    )
  }


//search according to invoiceno.
invoiceWiseSale(invoiceno : any)
{
 
    this.totalSale=0
    this.totalPaid=0
    this.totalDue=0

    
    this.sortedSales=this.sales.filter(function(element){
      return element.invoiceno==invoiceno
    })

    if(invoiceno!=null)
    this.displaySales=this.sortedSales
    else 
    this.displaySales=this.sales


    this.displaySales.forEach(sales =>
      {
        this.totalSale+=sales.amountTotal;
        this.totalPaid+=sales.downpaymentTotal
        this.totalDue+=sales.dueTotal

      })
    

  }






  //date wise sale
  dateWiseSale(date :Date)
  {
    this.totalSale=0
    this.totalPaid=0
    this.totalDue=0

    
    this.sortedSales=this.sales.filter(function(element){
      return element.invoicedate==date
    })

    if(date!=null)
    this.displaySales=this.sortedSales
    else 
    this.displaySales=this.sales


    this.displaySales.forEach(sales =>
      {
        this.totalSale+=sales.amountTotal;
        this.totalPaid+=sales.downpaymentTotal
        this.totalDue+=sales.dueTotal

      })
    

  }


}
