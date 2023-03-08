import { TThunkActionResult } from '../types/action';
import { requireLogout, setComments, setOffers, setOffer, setOffersNearby, setOfferDataAction} from './action';
import { requireAuth } from './action';
import { TUser } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { APIRoute, AuthorizationStatus } from '../const';
import { offersAdapter, commentsAdapter, authInfoAdapter } from '../services/adapters';
import { TServerOffer } from '../types/server-offer';
import { TServerComment } from '../types/server-comment';
import { AxiosError } from 'axios';
import { TServerAuthInfo } from '../types/server-auth-info';
import { saveAuthInfo, removeAuthInfo } from '../services/auth-info';

enum HttpCode {
  Unauthorized = 401,
}

export const fetchOffersAction = (): TThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data: serverOffers } = await api.get<TServerOffer[]>(APIRoute.Hotels);
    const offers = offersAdapter(serverOffers);
    dispatch(setOffers(offers));
  };

export const checkAuthAction = (): TThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuth(AuthorizationStatus.Auth));
      })
      .catch((error: AxiosError) => {
        const { response } = error;
        if (response?.status === HttpCode.Unauthorized) {
          dispatch(requireAuth(AuthorizationStatus.NoAuth));
        }
      });
  };

export const loginAction = (userInfo: TUser): TThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: serverAuthInfo } = await api.post<TServerAuthInfo>(APIRoute.Login, userInfo);
    const authInfo = authInfoAdapter(serverAuthInfo);
    saveToken(authInfo.token);
    saveAuthInfo(authInfo);
    dispatch(requireAuth(AuthorizationStatus.Auth));
  };

export const logoutAction = (): TThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    removeAuthInfo();
    dispatch(requireLogout());
  };

export const fetchOfferAction = (id: number): TThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data: serverOffer } = await api.get<TServerOffer>(`${APIRoute.Hotels}/${id}`);
    const offers = offersAdapter([serverOffer]);
    dispatch(setOffer(offers[0]));
  };

export const fetchOffersNearby = (id: number): TThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data: serverOffers } = await api.get<TServerOffer[]>(`${APIRoute.Hotels}/${id}/nearby`);
    const offers = offersAdapter(serverOffers);
    dispatch(setOffersNearby(offers));
  };

export const fetchCommentsAction = (id: number): TThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data: serverComments } = await api.get<TServerComment[]>(`${APIRoute.Comments}/${id}`);
    const comments = commentsAdapter(serverComments);
    dispatch(setComments(comments));
  };


export const fetchOfferDataAction = (id: number): TThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data: serverOffersNearby } = await api.get<TServerOffer[]>(`${APIRoute.Hotels}/${id}/nearby`);
    const { data: serverOffer } = await api.get<TServerOffer>(`${APIRoute.Hotels}/${id}`);
    const { data: serverComments } = await api.get<TServerComment[]>(`${APIRoute.Comments}/${id}`);

    const offers = offersAdapter([serverOffer]);
    const comments = commentsAdapter(serverComments);
    const offersNearby = offersAdapter(serverOffersNearby);

    dispatch(setOfferDataAction({
      offer: offers[0],
      comments: comments,
      offersNearby: offersNearby,
    }));
  };


