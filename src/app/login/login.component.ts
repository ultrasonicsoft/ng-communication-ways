import { Component, OnInit } from '@angular/core';
import { EventBrokerService } from '../event-broker.service';
import { UserModel } from '../models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private eventBroker: EventBrokerService;
    user: UserModel = new UserModel(); 

    isLoggedIn = false;
    constructor() { }

    ngOnInit() {
        this.eventBroker = (<any>window).eventBroker as EventBrokerService;
    }

    doLogin(){
        this.eventBroker.setData(this.user);
        console.log(this.user);
        this.isLoggedIn = true;
    }

}
