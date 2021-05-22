import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import { SwatchesService } from '../swatches.service';

@Component({
  selector: 'app-swatches',
  templateUrl: './swatches.component.html',
  styleUrls: ['./swatches.component.css']
})
export class SwatchesComponent implements OnInit  {

  swatches:Product[];

  constructor(private dsObj:SwatchesService)
  {

  }

  ngOnInit()
  {
    this.dsObj.getSwatchesData().subscribe(
      data=>{
        this.swatches=data;
      },
      err=>{
        console.log("error is ",err);
      }
    );
  }
 

}
