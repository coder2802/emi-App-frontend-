import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  //add product
  public addProduct(product:any)
  {
    return this.http.post(`${baseUrl}/product/` , product)
  }

  //get all products
  public getAllProducts()
  {
    return this.http.get(`${baseUrl}/product/`)
  }

  //change status of product
  public changeStatus(id :any , active:any)
  {
    return this.http.put(`${baseUrl}/product/${id}/${active}` , id , active  )
  }
}
