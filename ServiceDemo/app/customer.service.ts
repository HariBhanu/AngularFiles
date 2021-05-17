import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http : Http) {}
  searchCustomer( CUS_ID:number):Observable<Customer>{
    return this._http.get("http://localhost:8080/HibernateRestExample/webapi/customer/"+ CUS_ID).
    map((res:Response)=>res.json())
  }
  showCustomer() : Observable<Customer[]> {
    return this._http.get("http://localhost:8080/HibernateRestExample/webapi/customer").
    map((res:Response)=>res.json())
}

}