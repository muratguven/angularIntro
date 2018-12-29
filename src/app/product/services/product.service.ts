import { ProductModel } from './../productModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private httpClient:HttpClient ) { }

 serverAdress:string ="http://localhost:57912/api/"; 

GetAllProducts():Observable<Array<ProductModel>>{

return this.httpClient.get<Array<ProductModel>>(this.serverAdress+"Product/Get");

}
GetAllProductsTest():Observable<Array<any>>{

  return this.httpClient.get<Array<any>>(this.serverAdress+"Product/Get");
  
  }
}
