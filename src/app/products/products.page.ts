import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {

  productList = [];
  product = {};

  constructor(private databaseProvider: DatabaseService) { 
    this.databaseProvider.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.loadProductList();
      }
    })
  }

  loadProductList() {
    this.databaseProvider.getAllProducts().then(data => {
      this.productList = data
      console.log("Product List from loadProductList: ",this.productList)
    })
  }

  addProductInfo() {
    this.databaseProvider.addproducts(
      parseInt(this.product['id']), 
      this.product['product_name'], 
      parseInt(this.product['price']), 
      parseInt(this.product['tax'])
      ).
    then(data => {
      console.log(data);
      this.loadProductList()
      console.log("Product List from addProductInfo: ",this.loadProductList())
      console.log("2. Product from addProductInfo: ",this.product)
    });
    this.product = {}
  }

  updateProductInfo() {

  }

  deleteProduct() {
    
  }
}
