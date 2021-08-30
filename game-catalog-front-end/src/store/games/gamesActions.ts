import { gameTypes } from './gamesTypes';
import {
  FetchGamesRequest,
  FetchGamesSuccess,
  FetchGamesFailure,
  FetchGamesSuccessPayload,
  FetchGamesFailurePayload,
} from './types';

export const fetchGamesRequest = (): FetchGamesRequest => ({
  type: gameTypes.FETCH_GAME_REQUEST,
});

export const fetchGamesSuccess = (
  payload: FetchGamesSuccessPayload,
): FetchGamesSuccess => ({
  type: gameTypes.FETCH_GAME_SUCCESS,
  payload,
});

export const fetchGamesFailure = (
  payload: FetchGamesFailurePayload,
): FetchGamesFailure => ({
  type: gameTypes.FETCH_GAME_FAILURE,
  payload,
});
