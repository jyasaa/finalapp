import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobilesService } from '../mobiles.service';
import { Mobile } from '../models/mobile.model';
import {Product} from '../models/product.model';


@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})
export class ViewmobilesComponent implements OnInit {

  p=1;
  searchTerm:string;
  mobiles:Product[];
  editMobileIndex;
  editMobileObj=new Mobile('','','','Add to Cart');
  editMobileStatus:boolean=false;

  constructor(private dsObj:MobilesService, private router:Router){

  }

  ngOnInit(){
    this.getUsers();
  }

  //to call data
  getUsers(){
    this.dsObj.getMobilesData().subscribe(
      res=>{
        this.mobiles=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }

  //to edit mobile
  editMobile(mobileObj,ind){
    this.editMobileObj=mobileObj;
    this.editMobileIndex=ind;
    this.editMobileStatus=true;
    console.log()
  }

  //saving mobile after edit
  saveMobile(modifiedMobileObj){
    this.editMobileStatus=false;

    modifiedMobileObj.id=this.editMobileObj["id"];
    modifiedMobileObj.button=this.editMobileObj["button"];
    
    this.dsObj.updateMobile(modifiedMobileObj).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log("error is",err);
      }
    )
  }

  //deleting product
  deleteMobile(mobileObj){
    console.log("mobile to delete",mobileObj.id)
    this.dsObj.deleteMobile(mobileObj.id).subscribe(
      res=>{
        //write getting latest data from API
        console.log("res is ",res);
        this.getUsers();
        alert("Mobile deleted")
      },
      err=>{
        console.log("err in delete mobile",err)
      }
    )
  }
}

