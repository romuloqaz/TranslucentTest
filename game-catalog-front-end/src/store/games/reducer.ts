import { gameTypes } from './gamesTypes';
import { GamesState, GamesActions } from './types';

const initialState: GamesState = {
  loading: false,
  games: [],
  error: null,
};

export default (state = initialState, action: GamesActions) => {
  switch (action.type) {
    case gameTypes.FETCH_GAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case gameTypes.FETCH_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        games: action.payload.games,
        error: null,
      };
    case gameTypes.FETCH_GAME_FAILURE:
      return {
        ...state,
        loading: false,
        games: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
