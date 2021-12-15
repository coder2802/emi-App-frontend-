import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }


  //add customer
  public addCustomer(customerdata:any)
  {
   return  this.http.post(`${baseUrl}/customer/` , customerdata)
  }

  //get all customers
  public getCustomer()
  {
    return this.http.get(`${baseUrl}/customer/`)
  }

  //get all city customer
  public getAllCityCustomer(city : any)
  {
    return this.http.get(`${baseUrl}/customer/address/${city}` , city)
  }

  //check customer firstname
  public checkCustomerFirstname(name:any)
  {
    alert(name)
    alert(" in service")
    return this.http.get(`${baseUrl}/customer/${name}` , name)
  }
}

