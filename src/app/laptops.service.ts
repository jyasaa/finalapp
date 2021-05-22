import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {

  constructor(private hc:HttpClient) { }
  //laptops

  getLaptopsData():Observable<Product[]>{
    return this.hc.get<Product[]>("http://localhost:3000/laptops");
  }
}
