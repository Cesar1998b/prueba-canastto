import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @Input() products: []; // Arreglo entrante con los productos desde el componente product
  categories = []; //Arreglo de categorias

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  //Función que obtiene las categorias a través del servicio creado, ordena las categorias y agrega los productos a la categoria correspondiente
  getCategories() {
    this.productService
      .getCategoriesAndProducts()
      .subscribe((response: any) => {
        this.categories = response.categories;
        this.sortCategories(this.categories);
        this.categories = this.addProductsInCategories(this.indexCategory(this.categories),this.products);
      });
  }

  //Función que ordena las categorias con su propieda id
  sortCategories(arr) {
    arr.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  }

  //Función que agrega los productos a la categoria correspondiente
  addProductsInCategories(arr, arr2) {
    this.getCategories();
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (
          arr2[j]['product_data']['categories'][0]['category_id'] ==
          arr[i][1]['id']
        ) {
          arr[i].push(arr2[j]['product_data']);
        }
      }
    }
    let a = this.flatten(arr);
    for (let i = 0; i < a.length; i++) {
      if(a[i] == 0 || a[i] == 1 || a[i] == 2){
        a.splice(i,1);
      }
    }
    return a;
  }

  //Función que indexa el Object de categories
  indexCategory(arr) {
    var result = Object.keys(arr).map((key) => [Number(key), arr[key]]);
    return result;
  }

  //Función que realiza un flat al arreglo entrante
  flatten(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
      // elimina ultimo valor del stack
      const next = stack.pop();
      if (Array.isArray(next)) {
        // agrega de nuevo los items al array, sin modificar la entrada original
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    //invierte para restaurar el orden de entrada
    return res.reverse();
  }
}
