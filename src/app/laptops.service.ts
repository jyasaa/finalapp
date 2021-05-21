import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {

  constructor() { }
  //laptops
  laptops:Product[]=[
    {
      productTitle:"HP",
      description:" Inspire ",
      productImage:"https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg",
      button:"Add to Cart "
    },
    
    {
      productTitle:"Acer",
      description:"Neon",
      productImage:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433",
      button:"Add to Cart "
    },
  
    {
      productTitle:"Lenovo",
      description:"Idea Pad",
      productImage:"https://images.moneycontrol.com/static-mcnews/2020/11/Lenovo-770x433.jpg?impolicy=website&width=770&height=431",
      button:"Add to Cart "
    },

    {
      productTitle:"Mi",
      description:"Notebook",
      productImage:"https://trak.in/wp-content/uploads/2020/06/images-2020-06-02T162810.495-1280x720.jpeg",
      button:"Add to Cart "
    },
      
    {
        productTitle:"Apple",
        description:"Mac Book Pro",
        productImage:"https://sm.mashable.com/mashable_in/review/m/macbook-pr/macbook-pro-m1-review-babys-first-content-creation-machine_3e58.jpg",
        button:"Add to Cart "
    },
    
    {
        productTitle:"Acer",
        description:"Predator",
        productImage:"https://i0.wp.com/laptopmedia.com/wp-content/uploads/2019/11/acerpredatortriton300pt315-51featured.jpg?fit=1200%2C675&ssl=1&w=640",
        button:"Add to Cart "
    },

    {
      productTitle:"Asus",
      description:"ROG",
      productImage:"https://rog.asus.com/media/1546852826561.jpg",
      button:"Add to Cart "
    },
      
    {
        productTitle:"Dell",
        description:"Inspiron Plus",
        productImage:"http://i.dell.com/sites/csimages/Videos_Images/en/3e4554b9-3080-4a01-bbe7-556b79678c6e.jpg",
        button:"Add to Cart "
    },
  ]

  getLaptopsData():Product[]{
    return this.laptops;
  }
}
