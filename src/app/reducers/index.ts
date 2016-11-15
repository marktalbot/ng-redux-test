import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import buttonReducer from './button.reducer';

// Sets the type of the inital state for each store
export class IAppState {
  counter?: number;
  button?: boolean;
};

// Contains all the app's various reducers
export const rootReducer = combineReducers<IAppState>({
  counter: counterReducer,
  button: buttonReducer
});