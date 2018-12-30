import { ProductCategoryModel } from './models/productCategoryModel';
import { AlertifyService } from './../../services/alertify.service';
import { ProductcategoryService } from './services/productcategory.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-productCategory',
  templateUrl: './productCategory.component.html',
  styleUrls: ['./productCategory.component.css'],
  providers:[ProductcategoryService]
})
export class ProductCategoryComponent implements OnInit {

  constructor(private categoryService:ProductcategoryService, private alert:AlertifyService) { }
  formResult:any = null;
  productCategoryList:ProductCategoryModel[];
  ngOnInit() {
    this.getAllCategories();
  }
@ViewChild('categoryForm') form:NgForm;
  // onSubmit(form:NgForm){
  //   if(form){
      
  //     this.categoryService.createProductCategory(form.value).subscribe(response=>{
  //      if(response["success"]==true){
  //        this.alert.success("New Product Category added.");
  //      }else
  //      {
  //       this.alert.success(JSON.stringify(response["result"]["ProductCategoryName"]));
  //      }        
  //     },
  //     error=>{
  //       this.alert.error(error["error"]);        
  //     });
    
  //   }else{
  //     this.alert.warning("Error:Form is undefined!")
  //   }
  //   this.getAllCategories();
  // }


  onSubmit(){
    console.log(this.form);
    // if(this.form){
      
    //   this.categoryService.createProductCategory(this.form.value).subscribe(response=>{
    //    if(response["success"]==true){
    //      this.alert.success("New Product Category added.");
    //    }else
    //    {
    //     this.alert.success(JSON.stringify(response["result"]["ProductCategoryName"]));
    //    }        
    //   },
    //   error=>{
    //     this.alert.error(error["error"]);        
    //   });
    
    // }else{
    //   this.alert.warning("Error:Form is undefined!")
    // }
    // this.getAllCategories();
  }


  getAllCategories(){
    this.categoryService.getAllProductCategories().subscribe(response=>{
      this.productCategoryList = response["result"];
      console.log(response["result"]);
    })
  }
}
