import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
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
  constructor() { }

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
