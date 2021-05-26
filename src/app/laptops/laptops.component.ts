import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import { LaptopsService } from '../laptops.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit  {

  searchTerm:string;

  laptops:Product[];
  //inject obj for Dataservice class
  constructor(private dsObj:LaptopsService){

  }

  ngOnInit(){
    //obj inilialisation logic
    this.dsObj.getLaptopsData().subscribe(
      data=>{
        this.laptops=data;
      },
      err=>{
        console.log("error is ",err);
      }
    );
  }

}
