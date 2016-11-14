import { CounterActions } from '../actions/counter-actions';

export default function counter(state = 0, action) {
  switch (action.type) {
    case CounterActions.INCREMENT_COUNTER:
      return state + 1;
    case CounterActions.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}