import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import { LaptopsService } from '../laptops.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit  {

 

  laptops:Product[];
  //inject obj for Dataservice class
  constructor(private dsObj:LaptopsService){

  }

  ngOnInit(){
    //obj inilialisation logic
    this.laptops=this.dsObj.getLaptopsData();
  }

}
