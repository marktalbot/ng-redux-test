import { ButtonActions } from '../actions/button.actions';

export default function button(state = false, action) {
  switch (action.type) {
    case ButtonActions.TOGGLE:
      return !state;
    default:
      return state;
  }
}