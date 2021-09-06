import * as redux from 'react-redux';

import {
  fetchGamesFailure,
  fetchGamesRequest,
  fetchGamesSuccess,
} from './store/games/gamesActions';
import reducer from './store/games/reducer';

describe('test state aplication', () => {
  const initialState = {
    loading: true,
    games: [],
    error: null,
    loaded: false,
  };

  const fetchState = {
    loading: false,
    games: [
      {
        id: 1,
        title: 'Metal Gear Solid 2',
        year: 2001,
        console: 'PS2',
        completed: false,
        dateOfCompletion: null,
        personalNotes:
          ' I really liked this game. A masterpiece from Kojima productions.',
      },
    ],
    error: null,
    loaded: false,
  };

  const fetchStateFailed = {
    loading: false,
    games: [],
    error: 'error',
    loaded: false,
  };

  test('test initial state', () => {
    expect(reducer(initialState, fetchGamesRequest()));
  });

  test('test fetch request success', () => {
    expect(reducer(initialState, fetchGamesSuccess(fetchState)));
  });

  test('test fetch request failed', () => {
    expect(reducer(initialState, fetchGamesFailure(fetchStateFailed)));
  });

  test('test mock useSelector', () => {
    jest
      .spyOn(redux, 'useSelector')
      .mockImplementation((callback) => callback(initialState));
  });
});
