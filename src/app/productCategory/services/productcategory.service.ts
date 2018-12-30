import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCategoryModel } from './../models/productCategoryModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductcategoryService {
address:string = "http://localhost:57912/api/";
constructor(private client:HttpClient) { }

//Create Product Category and return observable any.
createProductCategory(category:ProductCategoryModel):Observable<any>{
  category.id =0;
  
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      
    })
  };
  let createCategoryAdress = this.address+"Product/CreateProductCategory";   
  return this.client.post<any>(createCategoryAdress,category,httpOptions);
}

getAllProductCategories():Observable<ProductCategoryModel[]>{
  return this.client.get<ProductCategoryModel[]>(this.address+"Product/GetAllProductCategories");
}

}
