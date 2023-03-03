import { TOffer } from '../../../../types/offer';
import { Path } from '../../../../const';
import { Link } from 'react-router-dom';
import BookmarkButton from '../../../UI/bookmark-button/bookmark-button';

interface IFavoritesCard {
  offer: TOffer;
}

function FavoritesCard({offer}: IFavoritesCard): JSX.Element {
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
          <BookmarkButton isActive />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${Path.Room}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
