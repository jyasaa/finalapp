import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobilesService } from '../mobiles.service';
import { Mobile } from '../models/mobile.model';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  constructor(private msObj:MobilesService,private router:Router) { }

  ngOnInit(): void {
  }
   
  mobileModel=new Mobile("","","","Add to Cart");
  onSubmitNewMobile(){
    this.msObj.createNewMobile(this.mobileModel).subscribe(
      res=>{
        //after creation of new mobile... navigate to view mobiles
        this.router.navigateByUrl("admin/viewmobiles");
      },
      err=>{
        console.log("error occured",err);
      }
    )
  }



}
