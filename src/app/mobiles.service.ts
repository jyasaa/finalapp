import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Mobile } from './models/mobile.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  constructor(private hc:HttpClient) { }
  //mobiles

  getMobilesData():Observable<Mobile[]>{
    //http get- to get mobiles data
    return this.hc.get<Mobile[]>("http://localhost:3000/mobiles");
  }

  createNewMobile(mobileObj):Observable<any>{
      //to create new mobile data
      return this.hc.post("http://localhost:3000/mobiles",mobileObj);
  }
}
