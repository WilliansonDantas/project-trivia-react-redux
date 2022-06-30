import { BUTTON_WAS_PRESSED, DISABLED_BUTTONS, SAVE_QUESTION, TIMEOUT } from '../Actions';

const INITIAL_STATE = {
  question: [],
  isAnswered: false,
  disabledButtons: false,
  timer: 30,
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_QUESTION: {
    return {
      ...state,
      question: action.payload,
    };
  }
  case BUTTON_WAS_PRESSED: {
    return {
      ...state,
      isAnswered: true,
    };
  }
  case TIMEOUT: {
    return {
      ...state,
      timer: state.timer - 1,
    };
  }
  case DISABLED_BUTTONS: {
    return {
      ...state,
      disabledButtons: true,
    };
  }
  default: return state;
  }
};

export default game;
