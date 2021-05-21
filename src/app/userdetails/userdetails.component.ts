import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeService } from '../fake.service';
import { UserserviceService } from '../userservice.service';
 
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
 
  userObj:any;
 
  constructor(private ar:ActivatedRoute,private fs:UserserviceService) { }
 
  ngOnInit(): void {
    //getting id from url
    let id=this.ar.snapshot.params.id;
 
    //get details of post with this id
    this.fs.getUserById(id).subscribe(
      obj=>{
        this.userObj=obj;
      },
      err=>{
        console.log("error")
      }
    )
  }
 
}
