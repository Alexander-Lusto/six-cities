import { Offer } from '../../../types/offer';
import Card from '../../card/card';

const CARDS_AMOUNT = 3;

interface Props {
  offers: Offer[];
  city: string;
}

function NearPlacesList({ offers, city }: Props) {
  const nearOffers = offers
    .filter((offer) => offer.city.name === city)
    .slice(0, CARDS_AMOUNT);

  return (
    <div className="near-places__list places__list">
      {nearOffers.map((offer) => <Card offer={offer} key={offer.id} />)}
    </div>
  );
}

export default NearPlacesList;
