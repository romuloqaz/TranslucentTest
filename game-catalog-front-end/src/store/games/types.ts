import IGame from '../../models/IGame';
import { gameTypes } from './gamesTypes';

export interface GamesState {
  loading: boolean;
  games: IGame[];
  error: string | null;
}

export interface FetchGamesSuccessPayload {
  games: IGame[];
}

export interface FetchGamesFailurePayload {
  error: string;
}

export interface FetchGamesRequest {
  type: typeof gameTypes.FETCH_GAME_REQUEST;
}

export type FetchGamesSuccess = {
  type: typeof gameTypes.FETCH_GAME_SUCCESS;
  payload: FetchGamesSuccessPayload;
};

export type FetchGamesFailure = {
  type: typeof gameTypes.FETCH_GAME_FAILURE;
  payload: FetchGamesFailurePayload;
};

export type GamesActions =
  | FetchGamesRequest
  | FetchGamesSuccess
  | FetchGamesFailure;
