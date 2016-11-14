import { Component, OnInit } from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { CounterActions } from '../actions/counter-actions';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

    // This selects `counter` from the store and attaches it 
    // to the counter$ property.
    // It uses the property name (counter) to select, and ignores the $ from it.
    @select() counter$;
    
    constructor(private redux: NgRedux<any>) {}

    increment() {
        this.redux.dispatch({ type: CounterActions.INCREMENT_COUNTER });
        console.log('counter increment...', this.redux.getState());
    }

    decrement() {
        this.redux.dispatch({ type: CounterActions.DECREMENT_COUNTER });
        console.log('counter decrement...', this.redux.getState());
    }

    ngOnInit() {
        // 
    }

}
