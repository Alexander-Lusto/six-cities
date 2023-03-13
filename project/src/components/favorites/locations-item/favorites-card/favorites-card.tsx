import { TOffer } from '../../../../types/offer';
import { Path } from '../../../../const';
import { Link } from 'react-router-dom';
import BookmarkButton from '../../../UI/bookmark-button/bookmark-button';
import { changeCity } from '../../../../store/action';
import { cities } from '../../../../const';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentCity } from '../../../../store/main-data/selectors';

interface IFavoritesCard {
  offer: TOffer;
}

function FavoritesCard({offer}: IFavoritesCard): JSX.Element {
  const dispatch = useDispatch();
  const currentLocation = useSelector(getCurrentCity);
  const locationID = cities.find((city) => city.name === offer.city.name)?.id || currentLocation.id ;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="">
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton id={offer.id} isPropertyPage={false} isFavorite />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${Path.Room}/${offer.id}`} onClick={() => dispatch(changeCity(locationID))}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export default FavoritesCard;
