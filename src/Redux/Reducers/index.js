import { combineReducers } from 'redux';
import player from './loginReducer';
import game from './gameReducer';

const rootReducer = combineReducers({ player, game });

export default rootReducer;
