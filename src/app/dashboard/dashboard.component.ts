import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { EventBrokerService } from '../event-broker.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    user: UserModel;
    
    private eventBroker: EventBrokerService;

    constructor() { }

    ngOnInit() {
        this.eventBroker = (<any>window).eventBroker as EventBrokerService;
        this.user = this.eventBroker.getData();
        console.log(this.user);
    }

}
