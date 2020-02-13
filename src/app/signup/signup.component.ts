import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    model = {
        username:'',
        password:'',
        email:''
    }
    constructor( public router:Router) { }

    ngOnInit() {}

    register(){
        console.log(this.model)
        localStorage.setItem('user', JSON.stringify(this.model))
       this.router.navigate(['user-profile']);
      }
}
