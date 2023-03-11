import Card from '../card/card';
import { TOffer } from '../../types/offer';
import { memo } from 'react';

interface IPlacesListProps {
  offers: TOffer[];
  activeOfferChangeHandler: ((id:number) => void) | null;
  className: string;
  childClassName: string;
}

function PlacesList(props: IPlacesListProps): JSX.Element {
  const {offers, activeOfferChangeHandler, className, childClassName} = props;

  return (
    <div className={className}>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} className={childClassName}
          onMouseEnter={activeOfferChangeHandler ? () => activeOfferChangeHandler(offer.id) : undefined}
          onMouseLeave={activeOfferChangeHandler ? () => activeOfferChangeHandler(-1) : undefined}
        />
      ))}
    </div>
  );
}

export default memo(PlacesList, (prevProps, nextProps) => JSON.stringify(prevProps.offers) === JSON.stringify(nextProps.offers));
