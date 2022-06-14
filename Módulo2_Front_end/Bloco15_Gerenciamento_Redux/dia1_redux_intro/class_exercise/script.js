const INITIAL_STATE = {
  counter: 0,
};

const reducer = (state = INITIAL_STATE, {type}) => {
  if (type === 'INCREASE_COUNTER') {
    return { counter: state.counter + 1 };
  }

  if (type ===  'DECREASE_COUNTER') {
    if (state.counter === 0) {
      return { counter: 0 };
    }
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const incAction = { type: 'INCREASE_COUNTER' };
const decAction = { type: 'DECREASE_COUNTER' };

document.getElementById('inc').addEventListener('click', () => store.dispatch(incAction));
document.getElementById('dec').addEventListener('click', () => store.dispatch(decAction));

store.subscribe(() => {
  const { counter } = store.getState();
  const screenCounter = document.getElementById('counter');
  screenCounter.innerText = counter;
});
