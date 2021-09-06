import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [];
  img = `https://assets.compramass.com/products/`;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

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
