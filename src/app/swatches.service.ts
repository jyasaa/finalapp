import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SwatchesService {
 //smart watches
 swatches:Product[]
 constructor(private hc:HttpClient) { }
getSwatchesData():Observable<Product[]>
{
  return this.hc.get<Product[]>("http://localhost:3000/swatches")
}

}
