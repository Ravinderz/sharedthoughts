import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLoggedin : boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }

  signIn(){
    this.router.navigate(['/login']);
  }

  signUp(){
    this.router.navigate(['/register']);
  }

  logout(){
    this.isUserLoggedin = false;
  }
}
