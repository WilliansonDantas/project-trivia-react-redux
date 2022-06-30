import { LOGIN_INFO, SUM_PONTS } from '../Actions';

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
      score: state.score + action.payload,
    };
  }
  default: return state;
  }
};

export default player;
