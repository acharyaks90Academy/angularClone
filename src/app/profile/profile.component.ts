import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    model={
        username:'Jack',
        password:'',
        email:''
    }
    constructor() { }

    ngOnInit() {
       let user =  localStorage.getItem('user');
       if(user){
           this.model = JSON.parse(user);
       }
    }

}
