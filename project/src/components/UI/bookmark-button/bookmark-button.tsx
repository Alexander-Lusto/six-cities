import { useSelector, useDispatch } from 'react-redux';
import { AuthorizationStatus, Path, warningToastConfig, NOAUTH_WARNING_TEXT } from '../../../const';
import { updateFavoriteStatusAction } from '../../../store/api-actions';
import { getAuthorizationStatus } from '../../../store/authorization/selectors';
import { TThunkAppDispatch } from '../../../types/action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

enum ParentComponentName {
  Property = 'property',
  Card = 'place-card',
}

const ImageSize = {
  Property: {
    width: 31,
    height: 33,
  },
  Card: {
    width: 18,
    height: 19,
  },
};

interface IBookmarkButtonProps {
  id: number;
  isFavorite: boolean;
  isPropertyPage: boolean;
}

function BookmarkButton({id, isFavorite, isPropertyPage}: IBookmarkButtonProps): JSX.Element {
  const dispatch = useDispatch<TThunkAppDispatch>();
  const authStatus = useSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(isFavorite);

  function favoriteButtonClickHandler() {
    if(authStatus !== AuthorizationStatus.Auth) {
      toast(NOAUTH_WARNING_TEXT, warningToastConfig);
      navigate(Path.SignIn);
    } else {
      const newActiveStatus = isActive ? 0 : 1;
      dispatch(updateFavoriteStatusAction(id, newActiveStatus));
      setIsActive(!isActive);
    }
  }

  const parentComponentName = isPropertyPage ? ParentComponentName.Property : ParentComponentName.Card;
  const width = String(isPropertyPage ? ImageSize.Property.width : ImageSize.Card.width);
  const height = String(isPropertyPage ? ImageSize.Property.height : ImageSize.Card.height);

  return (
    <button className={isActive ?
      `${parentComponentName}__bookmark-button ${parentComponentName}__bookmark-button--active button` :
      `${parentComponentName}__bookmark-button button`} type="button" onClick={favoriteButtonClickHandler}
    >
      <svg className={`${parentComponentName}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      {isActive ?
        <span className="visually-hidden">In bookmarks</span> :
        <span className="visually-hidden">To bookmarks</span> }
    </button>
  );
}

export default BookmarkButton;
