import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/User.class';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : User;
  retypePassword:String = "";

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  redirectToHome(){
    this.router.navigate(['/home']);
  }

  checkPassword(){
    console.log(this.retypePassword);
    if(this.user.password === this.retypePassword){
      alert("password matched");
    }
  }

  submit(){
    console.log(this.user);
  }

}
