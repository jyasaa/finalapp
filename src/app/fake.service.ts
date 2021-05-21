import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private ht:HttpClient) { }

  getPosts():Observable<any>{
    return this.ht.get<any>("https://jsonplaceholder.typicode.com/posts");
  }

  getUsers():Observable<any>{
    return this.ht.get<any>("https://jsonplaceholder.typicode.com/users");
  }

  getPostById(id):Observable<any>
  {
    return this.ht.get("https://jsonplaceholder.typicode.com/posts/"+id);
  }
}
