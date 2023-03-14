import { TAuthInfo } from '../types/authInfo';

const AUTH_INFO_KEY_NAME = 'six-cities-auth-info';

export const getAuthInfo = (): TAuthInfo => {
  const authInfo = localStorage.getItem(AUTH_INFO_KEY_NAME) as string;
  return JSON.parse(authInfo) as TAuthInfo;
};

export const saveAuthInfo = (authInfo: TAuthInfo): void => {
  localStorage.setItem(AUTH_INFO_KEY_NAME, JSON.stringify(authInfo));
};

export const removeAuthInfo = (): void => {
  localStorage.removeItem(AUTH_INFO_KEY_NAME);
};
