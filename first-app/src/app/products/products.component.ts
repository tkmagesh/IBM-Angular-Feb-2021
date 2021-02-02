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
}
