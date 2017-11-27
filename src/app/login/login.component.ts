import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../classes/Login.class';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo: Login;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginInfo = new Login();
  }

  login(){
    console.log(this.loginInfo);
  }

}
