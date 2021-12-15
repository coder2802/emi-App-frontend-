import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  
  constructor(private http :HttpClient) { }


  public saveSale(sales:any)
  {
    return this.http.post(`${baseUrl}/sales/` ,sales)
  }


  //save firstemi date
  public saveDate(date: any, id: any) {
  
    return this.http.post(`${baseUrl}/sales/${date}/${id}` , date , id)
  }

  //get all sales
  public getAllSales()
  {
    return this.http.get(`${baseUrl}/sales/`)
  }

  //date wise sale
  public dateWiseSale(date : any)
  {
    return this.http.get(`${baseUrl}/sales/${date}` , date)
  }


  //get sales by customer
  public getSaleByCustomer(id : any)
  {
    return this.http.get(`${baseUrl}/sales/${id}` , id)
  }
}
