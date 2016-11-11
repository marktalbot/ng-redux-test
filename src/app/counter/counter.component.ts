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

  counter = function(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return state + 1;
      case 'DECREMENT_COUNTER':
        return state - 1;
      default:
        return state;
      }
    }

    // store = Redux.createStore(this.counter);

    increment() {
      this.redux.dispatch({ type: 'INCREMENT_COUNTER' });
      console.log('counter increment...', this.redux.getState());
    }

    decrement() {
      this.redux.dispatch({ type: 'DECREMENT_COUNTER' });
      console.log('counter decrement...', this.redux.getState());
    }

  ngOnInit() {
    console.log('counter init...');
  }

}
