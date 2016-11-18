import {
  RANDOM_TEXT,
} from '../actions/types';

const INITIAL_STATE = {
  text: '',
};

// Should be included in a Utils library
function makeid() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case RANDOM_TEXT:
      return { ...state, text: makeid() };
    default:
      return state;
  }
};
