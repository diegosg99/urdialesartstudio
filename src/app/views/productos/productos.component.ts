import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{
[x: string]: any;

    products: Array<any> = [];

    constructor(private _productService:ProductService){
    }

    ngOnInit(): void {

      this._productService.getProducts().subscribe(products => {

        let processedProducts: any[] = [];

        console.log(products);

        products.forEach((product: any)=>{
          processedProducts = [...processedProducts,product.payload.doc.data()];
          console.log(product);
        })

        this.products=processedProducts;

        console.log(this.products);
      });

    }

    addToCart = (event:Event) => {
      let product = event;
      this.products = [...this.products,product];
      console.log(this.products);
    }
}
