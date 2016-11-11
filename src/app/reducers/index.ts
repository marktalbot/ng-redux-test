import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';
import buttonReducer from './button-reducer';

export class IAppState {
  counter?: number;
  button?: boolean;
};

export const rootReducer = combineReducers<IAppState>({
  counter: counterReducer,
  button: buttonReducer
});