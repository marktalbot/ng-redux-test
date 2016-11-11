import { Component } from '@angular/core';

import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

    constructor(private redux: NgRedux<any>) {}

    toggle() {
        this.redux.dispatch({ type: 'TOGGLE' });
        console.log('Button Toggle...', this.redux.getState());
    }

}
