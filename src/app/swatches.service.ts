import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SwatchesService {
 //smart watches
 swatches:Product[]=[
  {
    productTitle:"Apple Watch",
    description:" Series 5 ",
    productImage:"https://photos5.appleinsider.com/gallery/32863-56755-Apple-Watch-Series-5-2-xl.jpg",
    button:"Add to Cart "
  },
  
  {
    productTitle:"Apple Watch",
    description:"Series 6",
    productImage:"https://techcrunch.com/wp-content/uploads/2020/09/apple-watch-series-6.jpg",
    button:"Add to Cart "
  },

  {
    productTitle:"Fitbit",
    description:"Versa 3",
    productImage:"https://www.techadvisor.com/cmsdata/features/3794586/fitbit-sense-vs-fitbit-versa-3_thumb800.jpg",
    button:"Add to Cart "
  },

  {
    productTitle:"Casio",
    description:"Pro Trek",
    productImage:"https://www.wareable.com/media/imager/201808/30809-posts.main_image.jpg",
    button:"Add to Cart "
  },
    
 
]

getSwatchesData():Product[]
{
  return this.swatches;
}
  constructor() { }
}
