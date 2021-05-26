import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';
import {Product} from '../models/product.model';


@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  searchTerm:string;

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
