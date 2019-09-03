import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventBrokerService {
    data: any;
    constructor() {
        console.log('EventBroker service initialized...');
    }

    setData(value: any) {
        this.data = value;
    }

    getData(): any {
        return this.data;
    }
}
