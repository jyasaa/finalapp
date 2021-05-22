import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';
import { Mobile } from '../models/mobile.model';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})
export class ViewmobilesComponent implements OnInit {

  mobiles:Product[];
  editMobileIndex;
  editMobileObj=new Mobile('','','','Add to Cart');
  editMobileStatus:boolean=false;

  constructor(private dsObj:MobilesService){

  }

  ngOnInit(){
    this.dsObj.getMobilesData().subscribe(
      data=>{
        this.mobiles=data;
      },
      err=>{
        console.log("err is ",err);
      }
    );
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
}

