import { Component } from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    
    // This selects `button` from the store and attaches it 
    // to the show$ property.
    @select('button') show$: Observable<boolean>;
    
    constructor(private redux: NgRedux<any>) {}

    toggle() {
        this.redux.dispatch({ type: 'TOGGLE' });
    }

}
