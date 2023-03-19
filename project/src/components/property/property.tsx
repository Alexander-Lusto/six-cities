import PropertyGallery from './property-gallery/property-gallery';
import Reviews from './reviews/reviews';
import PlacesList from '../places-list/places-list';
import SubmitReviewForm from './submit-review-form/submit-review-form';
import { Navigate, useParams } from 'react-router';
import { Path } from '../../const';
import Map from '../map/map';
import { cities, CardClassName } from '../../const';
import Spinner from '../spinner/spinner';
import { fetchOfferDataAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { AuthorizationStatus } from '../../const';
import { getOffer } from '../../store/property-data/selectors';
import { getComments } from '../../store/property-data/selectors';
import { getOffersNearby } from '../../store/property-data/selectors';
import { getAuthorizationStatus } from '../../store/authorization-process/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TThunkAppDispatch } from '../../types/action';
import BookmarkButton from '../UI/bookmark-button/bookmark-button';

function Property(): JSX.Element {
  const dispatch = useDispatch<TThunkAppDispatch>();
  const offer = useSelector(getOffer);
  const comments = useSelector(getComments);
  const offersNearby = useSelector(getOffersNearby);
  const authStatus = useSelector(getAuthorizationStatus);
  const id = Number(useParams().id);

  useEffect(() => {
    dispatch(fetchOfferDataAction(id));
  }, [id]);

  if (offer === null || comments === null || offersNearby === null) {
    return <Spinner />;
  }

  const currentLocation = cities.find((city) => city.name === offer.city.name);

  if (!currentLocation) {
    return <Navigate to={Path.NotFound} />;
  }

  const points = offersNearby
    .map((el) => Object.assign({}, el.location, { id: el.id }))
    .concat(Object.assign({}, offer.location, { id: offer.id }));

  const currentPoint = points.find((point) => point.id === offer.id);

  return (
    <main className="page__main page__main--property" data-testid={'property'}>
      <section className="property">
        <div className="property__gallery-container container">
          <PropertyGallery offer={offer} />
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium ?
              <div className="property__mark">
                <span>Premium</span>
              </div>
              : ''}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <BookmarkButton id={offer.id} isFavorite={offer.isFavorite} isPropertyPage/>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms}
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.goods.map((el) => (
                  <li className="property__inside-item" key={el}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={offer.host.isPro ?
                  'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' :
                  'property__avatar-wrapper user__avatar-wrapper'}
                >
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                <span className="property__user-status">
                  {offer.host.isPro ? 'Pro' : ''}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
              <Reviews comments={comments}></Reviews>
              {(authStatus === AuthorizationStatus.Auth) ?
                <SubmitReviewForm /> :
                ''}
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map points={points} city={currentLocation} selectedPoint={currentPoint}></Map>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesList className="near-places__list places__list" childClassName={CardClassName.Property}
            offers={offersNearby} activeOfferChangeHandler={null}
          />
        </section>
      </div>
    </main>
  );
}

export default Property;
