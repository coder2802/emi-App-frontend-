import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  page: number = 1;
  customer :any[]
  cardCustomer:any[]
  displayCustomer:any[]
  cardno:any
  city:any

  constructor(private customerService :CustomerService) { }

  ngOnInit(): void {

    this.customerService.getCustomer().subscribe(
      (data:any)=>
      {
        this.customer=data
        this.displayCustomer=data
      },
      (error:any)=>
      {
        console.log(error)
      }

    )
  }


  //card wise customer
  cardWiseCustomer(cardno :any)
  {

    if(cardno=='' || cardno==null)
    {
      this.displayCustomer=this.customer
    }
    else{
      
      this.displayCustomer=this.customer.filter(function(element){
        return element.card==cardno
      })
      
      
    }
    
  
  }


  //city wise customer
  cityWiseCustomer(city :any)
  {

    if(city=='' || city==null)
    {
      this.displayCustomer=this.customer
    }
    else{
      
      this.displayCustomer=this.customer.filter(function(element){
        return element.address.city==city
      })
      
      
    }
    
  
  }


}
