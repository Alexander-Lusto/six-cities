import { useSelector, useDispatch } from 'react-redux';
import { AuthorizationStatus, Path, warningToastConfig, NOAUTH_WARNING_TEXT } from '../../../const';
import { updateFavoriteStatusAction } from '../../../store/api-actions';
import { getAuthorizationStatus } from '../../../store/authorization-process/selectors';
import { TThunkAppDispatch } from '../../../types/action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface IBookmarkButtonProps {
  id: number;
  isFavorite: boolean;
}
function BookmarkButton({id, isFavorite}: IBookmarkButtonProps): JSX.Element {
  const dispatch = useDispatch<TThunkAppDispatch>();
  const authStatus = useSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(isFavorite);

  function favoriteButtonClickHandler() {
    if(authStatus !== AuthorizationStatus.Auth) {
      toast(NOAUTH_WARNING_TEXT, warningToastConfig);
      navigate(Path.SignIn);
    } else {
      setIsActive(!isActive);
      const newActiveStatus = isActive ? 0 : 1;
      dispatch(updateFavoriteStatusAction(id, newActiveStatus));
    }
  }

  return (
    <button className={isActive ?
      'place-card__bookmark-button place-card__bookmark-button--active button' :
      'place-card__bookmark-button button'} type="button" onClick={favoriteButtonClickHandler}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      {isActive ?
        <span className="visually-hidden">In bookmarks</span> :
        <span className="visually-hidden">To bookmarks</span> }
    </button>
  );
}

export default BookmarkButton;
