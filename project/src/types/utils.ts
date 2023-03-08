import { AuthorizationStatus } from '../const';
export function isCheckedAuth(authStatus: AuthorizationStatus ) {
  if (authStatus !== AuthorizationStatus.Unknown) {
    return true;
  }

  return false;
}

