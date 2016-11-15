import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// NG Redux stuff
import { NgReduxModule, NgRedux } from 'ng2-redux';
// import reduxLogger from 'redux-logger';
import { rootReducer, IAppState } from './reducers';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonComponent } from './button/button.component';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor(ngRedux: NgRedux<IAppState>) {
    // ngRedux.configureStore(rootReducer, {}, [ createLogger() ]);
    ngRedux.configureStore(rootReducer, {}, [ ]);
  }
}
