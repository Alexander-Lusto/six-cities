import { TThunkActionResult } from '../types/action';
import { requireLogout, setComments, setOffers, setOfferData, updateOffer, setOffer } from './action';
import { requireAuth } from './action';
import { TUser } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { APIRoute, AuthorizationStatus } from '../const';
import { offerAdapter, commentsAdapter, authInfoAdapter } from '../services/adapters';
import { TServerOffer } from '../types/server-offer';
import { TServerComment } from '../types/server-comment';
import { AxiosError } from 'axios';
import { TServerAuthInfo } from '../types/server-auth-info';
import { saveAuthInfo, removeAuthInfo } from '../services/auth-info';
import { TCommentPost } from '../types/comment-post';


enum HttpCode {
  Unauthorized = 401,
}

export const fetchOffersAction = (): TThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data: serverOffers } = await api.get<TServerOffer[]>(APIRoute.Hotels);
    const offers = serverOffers.map((serverOffer) => offerAdapter(serverOffer));
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

export const fetchCommentsAction = (id: number): TThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data: serverComments } = await api.get<TServerComment[]>(`${APIRoute.Comments}/${id}`);
    const comments = commentsAdapter(serverComments);
    dispatch(setComments(comments));
  };

export const postCommentAction = (id: number, comment: TCommentPost, onSuccess: () => void, onError: () => void): TThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const { data: serverComments } = await api.post<TServerComment[]>(`${APIRoute.Comments}/${id}`, comment);
      const comments = commentsAdapter(serverComments);
      dispatch(setComments(comments));
      onSuccess();
    } catch {
      onError();
    }
  };

export const fetchOfferDataAction = (id: number): TThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const [{ data: serverOffer }, { data: serverComments }, { data: serverOffersNearby }] = await Promise.all([
      api.get<TServerOffer>(`${APIRoute.Hotels}/${id}`),
      api.get<TServerComment[]>(`${APIRoute.Comments}/${id}`),
      api.get<TServerOffer[]>(`${APIRoute.Hotels}/${id}/nearby`),
    ]);

    const offer = offerAdapter(serverOffer);
    const comments = commentsAdapter(serverComments);
    const offersNearby = serverOffersNearby.map((serverOfferNearby) => offerAdapter(serverOfferNearby));

    dispatch(setOfferData({
      offer: offer,
      comments: comments,
      offersNearby: offersNearby,
    }));
  };

export const updateFavoriteStatusAction = (id: number, status: 0 | 1): TThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data: serverOffer } = await api.post<TServerOffer>(`${APIRoute.Favorite}/${id}/${status}`);
    const offer = offerAdapter(serverOffer);
    dispatch(updateOffer(offer));
    dispatch(setOffer(offer));
  };


