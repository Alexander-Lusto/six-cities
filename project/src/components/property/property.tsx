import { Offer } from '../../types/offer';
import PropertyGallery from './property-gallery/property-gallery';
import Reviews from './reviews/reviews';
import NearPlacesList from './near-places-list/near-places-list';
import SubmitReviewForm from './submit-review-form/submit-review-form';

interface Props {
  offer: Offer;
  offers: Offer[];
}

function Property({ offer, offers }: Props): JSX.Element {
  const comments = offer.comments;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <PropertyGallery offer={offer}></PropertyGallery>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>{offer.isPremium}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
              </h1>
              <button className={offer.isFavorite ?
                'property__bookmark-button button property__bookmark-button--active' :
                'property__bookmark-button button'} type="button"
              >
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
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
              <SubmitReviewForm offer={offer} offers={offers}></SubmitReviewForm>
            </section>
          </div>
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <NearPlacesList offers={offers} city={offer.city.name}></NearPlacesList>
        </section>
      </div>
    </main>
  );
}

export default Property;
