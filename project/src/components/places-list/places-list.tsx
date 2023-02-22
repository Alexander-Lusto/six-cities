import Card from '../card/card';
import { Offer } from '../../types/offer';
import { useState } from 'react';

interface IPlacesListProps {
  offers: Offer[];
};

function PlacesList(props: IPlacesListProps): JSX.Element {
  const [, setActivePlace] = useState(-1);

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((offer) => (
        <Card key={offer.id} offer={offer}
          onMouseEnter={() => setActivePlace(offer.id)}
          onMouseLeave={() => setActivePlace(-1)}
        />
      ))}
    </div>
  );
}

export default PlacesList;
