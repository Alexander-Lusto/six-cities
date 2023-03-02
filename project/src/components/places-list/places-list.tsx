import Card from '../card/card';
import { TOffer } from '../../types/offer';

interface IPlacesListProps {
  offers: TOffer[];
  activeOfferChangeHandler: (id:number) => void;
  className: string;
  childClassName: string;
}

function PlacesList(props: IPlacesListProps): JSX.Element {
  const {offers, activeOfferChangeHandler, className, childClassName} = props;
  return (
    <div className={className}>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} className={childClassName}
          onMouseEnter={() => activeOfferChangeHandler(offer.id)}
          onMouseLeave={() => activeOfferChangeHandler(-1)}
        />
      ))}
    </div>
  );
}

export default PlacesList;
