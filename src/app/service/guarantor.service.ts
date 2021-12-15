import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class GuarantorService {

  constructor(
               private http:HttpClient

              ) { }

  public addGuarantor(guarantor : any)
  {
    return this.http.post(`${baseUrl}/guarantor/` , guarantor)

  }

  public getAllGuarantor()
  {
    return this.http.get(`${baseUrl}/guarantor/`)
  }
}
