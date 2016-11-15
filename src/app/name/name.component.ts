import { Component, OnInit } from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { select } from 'ng2-redux';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

    @select() name$;
    
    constructor(private redux: NgRedux<any>) {}

    ngOnInit() {
    }

    save(name: string) {
        this.redux.dispatch({type: 'SET_NAME', value: name});
        console.log('Setting name...', this.redux.getState());
    }

}
