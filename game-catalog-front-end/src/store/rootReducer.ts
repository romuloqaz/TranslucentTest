import { combineReducers } from 'redux';

import gameReducer from './games/reducer';

const rootReducer = combineReducers({
  games: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
