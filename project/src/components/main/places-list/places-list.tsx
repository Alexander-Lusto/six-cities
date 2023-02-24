import Card from '../../card/card';
import { Offer } from '../../../types/offer';

interface IPlacesListProps {
  offers: Offer[];
  activeOfferChangeHandler: (id:number) => void;
}

function PlacesList(props: IPlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((offer) => (
        <Card key={offer.id} offer={offer}
          onMouseEnter={() => props.activeOfferChangeHandler(offer.id)}
          onMouseLeave={() => props.activeOfferChangeHandler(-1)}
        />
      ))}
    </div>
  );
}

export default PlacesList;
