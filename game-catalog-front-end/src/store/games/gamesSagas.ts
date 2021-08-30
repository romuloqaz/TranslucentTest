import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import IGame from '../../models/IGame';
import { fetchGamesFailure, fetchGamesSuccess } from './gamesActions';
import { gameTypes } from './gamesTypes';

const getGames = () => axios.get<IGame[]>('http://localhost:8080/games');

function* fetchGamesSaga() {
  try {
    const response: AxiosResponse<IGame[]> = yield call(getGames);
    console.log(response);
    yield put(
      fetchGamesSuccess({
        games: response.data,
      }),
    );
  } catch (error) {
    console.log('ERROR', error);
    yield put(fetchGamesFailure(error.message));
  }
}

function* postsSaga() {
  yield all([takeLatest(gameTypes.FETCH_GAME_REQUEST, fetchGamesSaga)]);
}

export default postsSaga;
