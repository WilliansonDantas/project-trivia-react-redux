import { LOGIN_INFO, SUM_PONTS, COUNT_ASSERTIONS } from '../Actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_INFO: {
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };
  }
  case SUM_PONTS: {
    return {
      ...state,
      score: state.score + action.payload,
    };
  }
  case COUNT_ASSERTIONS: {
    return {
      ...state,
      assertions: state.assertions + 1,
    };
  }
  default: return state;
  }
};

export default player;
