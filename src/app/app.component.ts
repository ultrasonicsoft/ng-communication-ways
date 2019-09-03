import { Component } from '@angular/core';
import { EventBrokerService } from './event-broker.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-communication-ways';

    constructor(private eventBroker: EventBrokerService){
        (<any>window).eventBroker = this.eventBroker;
    }
}
