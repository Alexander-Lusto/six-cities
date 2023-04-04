import { createAPI } from '../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { TState } from '../types/state';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore < TState, Action, ThunkDispatch<TState, typeof api, Action >> (middlewares);

export default mockStore;
