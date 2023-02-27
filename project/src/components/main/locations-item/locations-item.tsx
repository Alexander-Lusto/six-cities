import { createRef } from 'react';

interface ILocationsItemProps {
  locationID: number;
  locationName: string;
  isActive: boolean;
  clickHandler: (locationID: number) => void;
}

function LocationsItem(props: ILocationsItemProps): JSX.Element {
  const { locationID, locationName, isActive, clickHandler } = props;
  const linkRef = createRef<HTMLAnchorElement>();

  return (
    <li className="locations__item">
      <a className={isActive ?
        'locations__item-link tabs__item tabs__item--active' :
        'locations__item-link tabs__item'} href="#" ref={linkRef}
      onClick={() => {
        const link = linkRef.current;
        if(link && link.dataset.locationId) {
          clickHandler(Number(link.dataset.locationId));
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
