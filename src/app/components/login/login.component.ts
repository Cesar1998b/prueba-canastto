import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status = false;

  constructor() { }

  ngOnInit(): void {
  }

  saveKey(){
    this.status = true;
    localStorage.setItem('status',this.status.toString());
  }

}
