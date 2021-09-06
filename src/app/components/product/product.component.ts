import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = []; //Arreglo de productos
  img = `https://assets.compramass.com/products/`; //URL para obtener las imagenes de los productos

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  //Función que obtiene los productos a través del servicio creado y agrega la imagene correspondiente a cada producto y por último los ordena
  getProducts() {
    this.productService
      .getCategoriesAndProducts()
      .subscribe((response: any) => {
        this.products = response.products;
        this.products.forEach(product => {
          if(product.kind == 1){
            product.product_data.img = this.img + `${product.product_data.ean}-80@3x.jpg`;
          }else{
            product.product_data.img = this.img + `${product.product_data.ean}@3x.jpg`;
          }
        });
        this.sortProductsToCategories(this.products);
        this.sortProducts(this.products);
      });
  }

  //Función que ordena los productos por su respectiva categoria
  sortProductsToCategories(arr){
    arr.sort(function(a,b){
      if(a.product_data.categories.category_id>b.product_data.categories.category_id){
        return 1;
      }if(a.product_data.categories.category_id<b.product_data.categories.category_id){
        return -1;
      }
      return 0;
    })
  }

  //Función que ordena los productos por la propiedad categories-ordinal
  sortProducts(arr){
    arr.sort(function(a,b){
    if(a.product_data.categories[0].ordinal>b.product_data.categories[0].ordinal){
      return 1;
    }if(a.product_data.categories[0].ordinal<b.product_data.categories[0].ordinal){
      return -1;
    }
    return 0;
    })
  }

}
