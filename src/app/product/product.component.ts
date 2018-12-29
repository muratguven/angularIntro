import { ProductModel } from './productModel';
import { ProductService } from './services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  productList: Array<ProductModel>;
  settings = {
    columns: {
      id: {
        title: 'Id'
      },
      productCode: {
        title: 'Product Code'
      },
      barCode: {
        title: 'Barcode'
      },
      productName: {
        title: 'ProductName'
      },
      description: {
        title: 'Description'
      },
      productCategoryId: {
        title: 'CategoryId'
      }
    },
    mode: "inline",
    attr: {
      class: "table table-responsive table-hover"
    },
    actions:{
      add:false,
      edit:false,
      delete:false
    },
    filter:{
      inputClass:"form-control-sm"
    },
    pager:{
      display:true,
      perPage:3

    }

  }


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.GetAllProducts();
    // this.GetAllProductsTest();
  }

  GetAllProducts() {

    this.productService.GetAllProducts().subscribe(response => {
      this.productList = response["result"];

    });

  }



}

