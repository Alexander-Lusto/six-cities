import Card from '../card/card';
import { Offer } from '../../types/offer';

type Props = {
  offers: Offer[];
};

function PlacesList(props: Props): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((offer) => <Card key={offer.id} offer={offer} />)}
    </div>
  );
}

export default PlacesList;
