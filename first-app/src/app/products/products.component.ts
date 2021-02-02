import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  newProductName : string = '';
  productNames : string[] = [  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddProductClick(){
    this.productNames.push(this.newProductName)
  }

  onRemoveClick(productName : string){
    //this.productNames.splice(this.productNames.indexOf(productName), 1);
    this.productNames = this.productNames.filter(p => p !== productName);
  }
}
