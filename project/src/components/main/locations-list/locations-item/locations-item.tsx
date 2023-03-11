import { createRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeCity } from '../../../../store/action';

interface ILocationsItemProps {
  locationID: number;
  locationName: string;
  isActive: boolean;
}

function LocationsItem(props: ILocationsItemProps): JSX.Element {
  const dispatch = useDispatch();
  const { locationID, locationName, isActive } = props;
  const linkRef = createRef<HTMLAnchorElement>();

  return (
    <li className="locations__item">
      <a className={isActive ?
        'locations__item-link tabs__item tabs__item--active' :
        'locations__item-link tabs__item'} ref={linkRef}
      onClick={() => {
        const link = linkRef.current;
        if(link && link.dataset.locationId) {
          dispatch(changeCity(Number(link.dataset.locationId)));
        }
      }}
      data-location-name={locationName}
      data-location-id={locationID}
      >
        <span>{locationName}</span>
      </a>
    </li>
  );
}

export default LocationsItem;
