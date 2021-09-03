import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../services/api';
import {
  fetchGamesFailure,
  fetchGamesSuccess,
  addGamesSuccess,
  addGamesFailure,
} from './gamesActions';
import { gameTypes } from './gamesTypes';

function* fetchGamesSaga() {
  try {
    const response: AxiosResponse = yield call(api.get, '/games');
    yield put(
      fetchGamesSuccess({
        games: response.data,
      }),
    );
  } catch (error) {
    yield put(fetchGamesFailure(error.message));
  }
}

function* addGamesSaga(game) {
  if (game) {
    try {
      const response: AxiosResponse = yield call(
        api.post,
        '/games',
        game.payload,
      );
      toast.success('Game inserted successfully!');

      yield put(
        addGamesSuccess({
          games: response.data,
        }),
      );
    } catch (error) {
      toast.error('Failed to insert game');
      yield put(addGamesFailure(error.message));
    }
  }
}

function* gamesSaga() {
  yield all([
    takeLatest(gameTypes.FETCH_GAME_REQUEST, fetchGamesSaga),
    takeLatest(gameTypes.ADD_GAME_REQUEST, addGamesSaga),
  ]);
}

export default gamesSaga;
