import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  

  productsSentByChild:Product[];

  getProductDetailsFromChild(product)
  {
    this.productsSentByChild.push(product);
  }

}
