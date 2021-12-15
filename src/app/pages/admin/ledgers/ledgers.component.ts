import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { SalesService } from 'src/app/service/sales.service';




@Component({
  selector: 'app-ledgers',
  templateUrl: './ledgers.component.html',
  styleUrls: ['./ledgers.component.css']
})
export class LedgersComponent implements OnInit {

  city:any
  custName:any
  customerSaleIndex=0
  customerSaleItemIndex=0
  
  customer=[
    {
      id:0,
      firstname:'',
      addressLine1:'',
      addressLine2:'',
      contact: 0,
      email: '',
      accountno:0,
      card:0


    }
  ]

  //customer sale
  
  customerSales =[
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
      "guarantor":{
                "id":0,
                "name":'',
                "contact":0
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
              "map": {
                "2021-11-20T18:30:00.000+00:00": false,
                "2022-06-20T18:30:00.000+00:00": false,
                "2021-12-20T18:30:00.000+00:00": false,
                "2022-08-20T18:30:00.000+00:00": false,
                "2022-03-20T18:30:00.000+00:00": false,
                "2022-09-20T18:30:00.000+00:00": false,
                "2022-02-20T18:30:00.000+00:00": false,
                "2021-10-20T18:30:00.000+00:00": false,
                "2022-05-20T18:30:00.000+00:00": false,
                "2022-04-20T18:30:00.000+00:00": false,
                "2022-07-20T18:30:00.000+00:00": false,
                "2022-01-20T18:30:00.000+00:00": false
            },
            "emimap": {
                "2021-12-21T00:00:00.000+00:00": 4308.33,
                "2021-10-21T00:00:00.000+00:00": 4308.333333333333,
                "2022-01-22T00:00:00.000+00:00": 4318.33,
                "2021-11-22T00:00:00.000+00:00": 4318.333333333333
            },
            
              "product": {
                  "id": 469,
                  "name": " ",
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







  constructor(
    private customerService:CustomerService,
    private salesService:SalesService,
    

              ) { }

  ngOnInit(): void {
  }



  //on city change
  cityChange(city : any):void{

    
    this.customerService.getAllCityCustomer(city).subscribe(
      (data:any)=>
      {
        this.customer=data
        //alert(this.customer[1].firstname)
        this.customerSaleIndex=0
        this.customerSaleItemIndex=0
        this.custName=''
      },
      (error:any)=>
      {
        console.log(error)
      }

    )


  }

  //get customer ledger
  getCustomerSale(id : any)
  {

    this.salesService.getSaleByCustomer(id).subscribe(
      (data:any)=>
      {
        
        this.customerSales=data
        this.customerSaleIndex=0
        this.customerSaleItemIndex=0
      },
      (error:any)=>
      {
        console.log(error)
      }
    )
  }


  changeCustomerSaleIndex(i:any)
  {
  
    this.customerSaleItemIndex=0
  }



  //gat sales product
  getSaleProduct(id:any)
  {
    
  }

  printPage() {
    window.print();
  }
}
