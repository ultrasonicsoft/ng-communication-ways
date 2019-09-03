import { Component, OnInit } from '@angular/core';
import { EventBrokerService } from '../event-broker.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    private eventBroker: EventBrokerService;

    constructor() { }

    ngOnInit() {
        this.eventBroker = (<any>window).eventBroker as EventBrokerService;
        const value = this.eventBroker.getData();
        console.log(value);
    }

}
