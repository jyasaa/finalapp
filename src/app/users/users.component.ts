import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  mysubscription:any;
  userdata:any;
 
  constructor(private uc:UserserviceService,private router:Router) { }
 
  ngOnInit(): void {
    this.uc.getUserData().subscribe(
      data=>{
        this.mysubscription=this.userdata=data;
      },
      err=>{
             console.log("error");
      }
    )
  }
  onSelectId(id)
  {

    this.router.navigateByUrl('users/'+id);
  }
 
}
