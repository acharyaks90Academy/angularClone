import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor(public router:Router) { }

  ngOnInit() {
  }

  model = {
    username:'',
    password:'',
    email:''
}

  signIn(){

    localStorage.setItem('user', JSON.stringify(this.model))

    this.register();
  }

  register(){
    this.router.navigate(['user-profile'])
  }

}
