import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() categories: []; // Categorias de los productos
  ready = false; //Boolean que nos notifica que categories esta listo para ser usado

  constructor() {}

  ngOnInit(): void {
    if(this.categories.length != 0){
      this.ready = true;
      console.log(this.categories);
    }
  }

}

