import { createRef } from 'react';

interface ILocationsItemProps {
  location: string;
  isActive: boolean;
  clickHandler: (locationID: string) => void;
}

function LocationsItem(props: ILocationsItemProps): JSX.Element {
  const { location, isActive, clickHandler } = props;
  const linkRef = createRef<HTMLAnchorElement>();

  return (
    <li className="locations__item">
      <a className={isActive ?
        'locations__item-link tabs__item tabs__item--active' :
        'locations__item-link tabs__item'} href="#" ref={linkRef}
      onClick={() => {
        const link = linkRef.current;
        if(link && link.dataset.locationName) {
          clickHandler(link.dataset.locationName);
        }
      }}
      data-location-name={location}
      >
        <span>{location}</span>
      </a>
    </li>
  );
}

export default LocationsItem;
