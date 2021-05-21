import { Component,OnDestroy, OnInit } from '@angular/core';
import {FakeService} from '../fake.service';
import {Observable}  from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  usersubscription:any;
  mypost:any;

  constructor(private Pobj:FakeService,private router:Router) { }

  ngOnInit(): void {
    this.Pobj.getPosts().subscribe(
      postdata=>{
        this.usersubscription=this.mypost=postdata;
      },
      err=>{
        console.log("error");
      }
    )
  }

  onSelectId(id)
  {
    this.router.navigateByUrl('test/'+id);
  }


}

