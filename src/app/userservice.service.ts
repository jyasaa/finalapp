import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private ht:HttpClient) {  }

  getUserData():Observable<any>{

    return this.ht.get<any>("http://localhost:3000/users")

  }
  getUserById(id):Observable<any>
  {
    return this.ht.get("http://localhost:3000/users/"+id);
  }
}
