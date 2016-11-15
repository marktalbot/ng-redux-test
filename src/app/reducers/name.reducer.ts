// import { ButtonActions } from '../actions/button.actions';

export default function name(state = '', action) {
  switch (action.type) {
    case 'SET_NAME':
      return state = action.value;
    default:
      return state;
  }
}