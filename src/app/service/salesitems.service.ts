import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SalesitemsService {

  constructor(private http:HttpClient) { }

  //get salesitem by id
  public getSalesItemById(id:any)
  {
    return this.http.get(`${baseUrl}/salesitem/${id}` , id)
  }

  //pay item emi
  public payEmi(emitrack:any)
  {
    return this.http.put(`${baseUrl}/salesitem/` , emitrack )
  }
}
