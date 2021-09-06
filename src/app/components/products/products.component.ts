import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() categories: []; // Arreglo de categorias y productos ya ordenados entrante desde el componente categories
  ready = false; //Boolean que nos notifica si categories esta listo para ser usado

  constructor() {}

  ngOnInit(): void {
    if(this.categories.length != 0){
      this.ready = true;
      console.log(this.categories);
    }
  }

}

