import { gameTypes } from './gamesTypes';
import { GamesState, GamesActions } from './types';

const initialState: GamesState = {
  loading: false,
  games: [],
  error: null,
  loaded: false,
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
        loaded: true,
        error: null,
      };
    case gameTypes.FETCH_GAME_FAILURE:
      return {
        ...state,
        loading: false,
        games: [],
        loaded: true,
        error: action.payload.error,
      };
    case gameTypes.ADD_GAME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case gameTypes.ADD_GAME_REQUEST_SUCCESS:
      console.log('AQUII success', state.games);
      return {
        ...state,
        loading: false,
        games: [...state.games, action.payload.games],
        error: null,
      };
    case gameTypes.ADD_GAME_REQUEST_FAILURE:
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
