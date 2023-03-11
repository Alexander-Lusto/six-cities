import { Link } from 'react-router-dom';
import { Path } from '../../const';
import { TOffer } from '../../types/offer';
import { memo } from 'react';

const capitalizeFirstLetter = (string: string) => string[0].toUpperCase() + string.slice(1);

interface ICardProps {
  offer: TOffer;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className: string;
}

function Card({ offer, onMouseEnter, onMouseLeave, className = '' }: ICardProps): JSX.Element {
  const ratingPercent = `${Math.round(offer.rating) * 20}%`;

  return (
    <article className={`${className} place-card`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place preview" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={offer.isFavorite ?
            'place-card__bookmark-button button place-card__bookmark-button--active' :
            'place-card__bookmark-button button'} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingPercent }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${Path.Room}/${offer.id}`} onClick={() => window.scrollTo({top: 0,behavior: 'smooth'})}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export default memo(Card, (prevProps, nextProps) => prevProps.offer === nextProps.offer);
