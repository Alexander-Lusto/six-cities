import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { TState } from '../types/state';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import { APIRoute } from '../const';
import { requireAuth, requireLogout, setComments, setOffer, setOfferData, setOffers, updateOffer } from './action';
import { AuthorizationStatus } from '../const';
import { TUser } from '../types/user';
import { TAuthInfo } from '../types/auth-info';
import { checkAuthAction, loginAction, logoutAction, fetchOffersAction, fetchOfferDataAction, fetchCommentsAction, postCommentAction, updateFavoriteStatusAction } from './api-actions';
import { AUTH_INFO_KEY_NAME } from '../services/auth-info';
import { AUTH_TOKEN_KEY_NAME } from '../services/token';
import { offerAdapter, commentsAdapter, authInfoAdapter } from '../services/adapters';
import { mockServerOffers } from '../mock/serverOffers';
import { mockServerAuthInfo } from '../mock/serverAuthInfo';
import { mockServerComments } from '../mock/serverComments';
import { mockComments } from '../mock/commetns';
import { HttpCode } from '../const';


describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<TState, Action, ThunkDispatch<TState, typeof api, Action>>(middlewares);

  test('should reply status HttpCode.Success if authorization status is "Auth"', async () => {
    const store = mockStore();
    mockAPI.onGet(APIRoute.Login).reply(HttpCode.Success, []);

    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());
    expect(store.getActions()).toEqual([requireAuth(AuthorizationStatus.Auth)]);
  });

  test('should dispatch RequireAuth and save authInfo in storage when Login GET /login', async () => {
    const mockAuthInfo: TAuthInfo = authInfoAdapter(mockServerAuthInfo);
    const mockUser: TUser = {email:'keks123@mail.ru', password: 'qwerty'};

    mockAPI.onPost(APIRoute.Login).reply(HttpCode.Success, mockServerAuthInfo);
    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    expect(store.getActions()).toEqual([]);
    await store.dispatch(loginAction(mockUser));

    expect(store.getActions()).toEqual([requireAuth(AuthorizationStatus.Auth)]);
    expect(Storage.prototype.setItem).toBeCalledTimes(2);
    expect(Storage.prototype.setItem).toHaveBeenNthCalledWith(1, AUTH_TOKEN_KEY_NAME, mockAuthInfo.token);
    expect(Storage.prototype.setItem).toHaveBeenNthCalledWith(2, AUTH_INFO_KEY_NAME, JSON.stringify(mockAuthInfo));

  });

  test('should dispatch SetOffers when GET /offers', async () => {
    mockAPI.onGet(APIRoute.Hotels).reply(HttpCode.Success, mockServerOffers);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchOffersAction());

    const offers = mockServerOffers.map((el) => offerAdapter(el));
    expect(store.getActions()).toEqual([setOffers(offers)]);
  });

  test('should dispatch RequireLogout when DELETE /logout', async () => {
    mockAPI.onDelete(APIRoute.Logout).reply(204);
    const store = mockStore();

    expect(store.getActions()).toEqual([]);
    await store.dispatch(logoutAction());

    expect(store.getActions()).toEqual([requireLogout()]);
  });

  test('should dispatch SetComments when GET /comments/id', async () => {
    const id = 1;
    mockAPI.onGet(`${APIRoute.Comments}/${id}`).reply(HttpCode.Success, mockServerComments[id]);
    const store = mockStore();

    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchCommentsAction(id));

    const comments = commentsAdapter(mockServerComments[id]);
    expect(store.getActions()).toEqual([setComments(comments)]);
  });

  test('should dispatch SetOfferData when GET /offers/id && /comments/id && /offers/id/nearby', async () => {
    const id = 0;
    mockAPI.onGet(`${APIRoute.Hotels}/${id}`).reply(HttpCode.Success, mockServerOffers[id]);
    mockAPI.onGet(`${APIRoute.Comments}/${id}`).reply(HttpCode.Success, mockServerComments[id]);
    mockAPI.onGet(`${APIRoute.Hotels}/${id}/nearby`).reply(HttpCode.Success, mockServerOffers);

    const store = mockStore();
    expect(store.getActions()).toEqual([]);
    await store.dispatch(fetchOfferDataAction(id));

    const offer = offerAdapter(mockServerOffers[id]);
    const comments = commentsAdapter(mockServerComments[id]);
    const offersNearby = mockServerOffers.map((el) => offerAdapter(el));
    expect(store.getActions()).toEqual([setOfferData({offer: offer, comments: comments, offersNearby: offersNearby})]);
  });

  test('should dispatch SetComments and call onSuccess when POST /comments/id', async () => {
    const id = 1;
    const mockComment = mockComments[4][0];
    const onSuccess = jest.fn();
    const onError = jest.fn();

    mockAPI.onPost(`${APIRoute.Comments}/${id}`).reply(HttpCode.Success, mockServerComments[id]);
    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    await store.dispatch(postCommentAction(id, mockComment, onSuccess, onError));
    const comments = commentsAdapter(mockServerComments[id]);
    expect(store.getActions()).toEqual([setComments(comments)]);
    expect(onSuccess).toBeCalled();
  });

  test('should call onEorror when POST /comments/id responds with error', async () => {
    const id = 1;
    const mockComment = mockComments[4][0];
    const onSuccess = jest.fn();
    const onError = jest.fn();

    mockAPI.onPost(`${APIRoute.Comments}/${id}`).reply(HttpCode.ServerError, mockServerComments[id]);
    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    await store.dispatch(postCommentAction(id, mockComment, onSuccess, onError));
    expect(onError).toBeCalled();
  });

  test('should dispatch UpdateOffer and SetOffer when POST /favorite/id/status', async () => {
    const id = 1;
    const status = 1;

    mockAPI.onPost(`${APIRoute.Favorite}/${id}/${status}`).reply(HttpCode.Success, mockServerOffers[id]);
    const store = mockStore();
    expect(store.getActions()).toEqual([]);

    await store.dispatch(updateFavoriteStatusAction(id, status));
    const offer = offerAdapter(mockServerOffers[id]);
    expect(store.getActions()).toEqual([updateOffer(offer), setOffer(offer)]);
  });
});
