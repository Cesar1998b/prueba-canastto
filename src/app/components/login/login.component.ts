import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('isLogin') === 'true'){
      this.router.navigateByUrl('/products');
    }
  }

  saveKey(){
    this.isLogin = true;
    localStorage.setItem('isLogin',this.isLogin.toString());
    this.router.navigateByUrl('/products');
  }

}
