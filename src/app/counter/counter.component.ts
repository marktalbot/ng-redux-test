import { Component, OnInit } from '@angular/core';

import { NgRedux } from 'ng2-redux';
// import { rootReducer } from './reducers/counter-reducer';




@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

    constructor(private redux: NgRedux<any>) {}

    increment() {
        this.redux.dispatch({ type: 'INCREMENT_COUNTER' });
        console.log('counter increment...', this.redux.getState());
    }

    decrement() {
        this.redux.dispatch({ type: 'DECREMENT_COUNTER' });
        console.log('counter decrement...', this.redux.getState());
    }

    ngOnInit() {
        // 
    }

}
