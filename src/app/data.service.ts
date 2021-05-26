import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
     //to check login status
     userLoginStatus():boolean{
      if(localStorage.getItem("username")==null){
        return false;
      }
      else{
        return true;
      }
    }

    //logout
    userLogout(){
      localStorage.clear();
    }

 

  
}
