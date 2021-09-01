import IGame from '../../models/IGame';
import { gameTypes } from './gamesTypes';

export interface GamesState {
  loading: boolean;
  games: IGame[];
  error: string | null;
  loaded: boolean;
}

export interface FetchGamesSuccessPayload {
  games: IGame[];
}

export interface FetchGamesFailurePayload {
  error: string;
}

export interface AddGamesPayload {
  games: IGame;
}

export interface AddGamesFailurePayload {
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

export interface AddGamesRequest {
  type: typeof gameTypes.ADD_GAME_REQUEST;
  payload: AddGamesPayload;
}

export interface AddGamesRequestSuccess {
  type: typeof gameTypes.ADD_GAME_REQUEST_SUCCESS;
  payload: AddGamesPayload;
}

export interface AddGamesRequestFailure {
  type: typeof gameTypes.ADD_GAME_REQUEST_FAILURE;
  payload: AddGamesFailurePayload;
}

export type GamesActions =
  | FetchGamesRequest
  | FetchGamesSuccess
  | FetchGamesFailure
  | AddGamesRequest
  | AddGamesRequestSuccess
  | AddGamesRequestFailure;
