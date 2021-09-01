import IGame from '../../models/IGame';
import { gameTypes } from './gamesTypes';
import {
  FetchGamesRequest,
  FetchGamesSuccess,
  FetchGamesFailure,
  FetchGamesSuccessPayload,
  FetchGamesFailurePayload,
  AddGamesRequest,
  AddGamesRequestSuccess,
  AddGamesRequestFailure,
  AddGamesPayload,
  AddGamesFailurePayload,
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
export const addGamesRequest = (payload): AddGamesRequest => ({
  type: gameTypes.ADD_GAME_REQUEST,
  payload,
});

export const addGamesSuccess = (
  payload: AddGamesPayload,
): AddGamesRequestSuccess => ({
  type: gameTypes.ADD_GAME_REQUEST_SUCCESS,
  payload,
});

export const addGamesFailure = (
  payload: AddGamesFailurePayload,
): AddGamesRequestFailure => ({
  type: gameTypes.ADD_GAME_REQUEST_FAILURE,
  payload,
});
