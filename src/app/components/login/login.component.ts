import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin = false; //Boolean que nos indica cuando se ha hecho Login en la aplicación

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('isLogin') === 'true'){
      this.router.navigateByUrl('/products');
    }
  }

  //Función que verifica si un usuario le ha dado en el boton de Login y guarda el valor true a la key isLogin en el LocalStorage
  saveKey(){
    this.isLogin = true;
    localStorage.setItem('isLogin',this.isLogin.toString());
    this.router.navigateByUrl('/products');
  }

}
