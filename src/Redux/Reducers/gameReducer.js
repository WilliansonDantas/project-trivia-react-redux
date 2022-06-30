import { BUTTON_WAS_PRESSED } from '../Actions';

const INITIAL_STATE = {
  isAnswered: false,
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case BUTTON_WAS_PRESSED: {
    return {
      ...state,
      isAnswered: true,
    };
  }
  default: return state;
  }
};

export default game;
