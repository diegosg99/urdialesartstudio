import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{

    products: Array<any> = [];

    constructor(){

    }

    ngOnInit(): void {
      this.products = [];
    }

}
