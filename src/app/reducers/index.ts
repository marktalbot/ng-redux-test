import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import buttonReducer from './button.reducer';
import nameReducer from './name.reducer';

// Sets the type of the inital state for each store
export class IAppState {
  counter?: number;
  button?: boolean;
  name?: string;
};

// Contains all the app's various reducers
export const rootReducer = combineReducers<IAppState>({
  counter: counterReducer,
  button: buttonReducer,
  name: nameReducer
});