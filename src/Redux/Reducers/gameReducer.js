import {
  BUTTON_WAS_PRESSED,
  DISABLED_BUTTONS,
  NEXT_QUESTION, SAVE_QUESTION, TIMEOUT, RESET_GAME } from '../Actions';

const INITIAL_STATE = {
  questionsList: [],
  currentIndex: 0,
  isAnswered: false,
  disabledButtons: false,
  timer: 30,
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_QUESTION: {
    return {
      ...state,
      questionsList: action.payload,
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
  case NEXT_QUESTION: {
    return {
      ...state,
      currentIndex: state.currentIndex + 1,
      isAnswered: false,
      disabledButtons: false,
      timer: 30,
    };
  }
  case RESET_GAME: {
    return {
      ...INITIAL_STATE,
    };
  }
  default: return state;
  }
};

export default game;
