import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  // to receive data from parent as input
   @Input() productObj:Product;
  
   //create a custom event
   @Output() myEvent= new EventEmitter()

   sendProductTOParent(product){
     this.myEvent.emit(product);
   }

}
