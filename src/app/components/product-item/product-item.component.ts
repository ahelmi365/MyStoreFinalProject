import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() product:Product;

// countProducts:number = 0;
enableAddToCart:boolean=false;
countProducts:any=null;
selectList: any[]=[
  {
    id:-1,
    value:"Please select "
  },
  {
    
    id: 0,
    value: 1
  },
  {
    id: 1,
    value: 2
  },
  {
    id: 2,
    value: 3
  },
  {
    id: 3,
    value: 4
  },
  {
    id: 4,
    value: 5
  },
  {
    id: 5,
    value: 6
  },
  {
    id: 6,
    value: 7
  },
  {
    id: 7,
    value: 8
  },
  {
    id: 8,
    value: 9
  },
  {
    id: 9,
    value: 10
  },
];

  constructor() {
    this.product={
      id:0,
      name:'',
      price:0,
      url:'',
      description:''

    }
   }

  ngOnInit(): void {
  }

  selectChange(event:any):any{
    // console.log(event);
    // console.log("selected");
    // console.log(`countProducts is: ${(this.countProducts)}`);
    // console.log(`countProducts is: ${(+this.countProducts>0)}`);
    // console.log(this.product.price);
    if(+this.countProducts>0){
      console.log(this.countProducts);
      this.enableAddToCart=true;
    }else{
      this.enableAddToCart=false;
    }
  }

}
