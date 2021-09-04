import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('status') === 'true'){
      this.router.navigateByUrl('/products');
    }
  }

  saveKey(){
    this.status = true;
    localStorage.setItem('status',this.status.toString());
    this.router.navigateByUrl('/products');
  }

}
