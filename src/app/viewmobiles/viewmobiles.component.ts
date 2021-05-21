import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-viewmobiles',
  templateUrl: './viewmobiles.component.html',
  styleUrls: ['./viewmobiles.component.css']
})
export class ViewmobilesComponent implements OnInit {

  mobiles:Product[];
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

}
