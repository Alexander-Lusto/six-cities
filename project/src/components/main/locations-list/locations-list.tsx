import LocationsItem from '../locations-item/locations-item';
import { cities } from '../../../const';
import { TCity } from '../../../types/city';

interface ILocationsList {
  currentLocation: TCity;
  locationsItemClickHandler: (locationName: string) => void;
}

function LocationsList({currentLocation, locationsItemClickHandler}: ILocationsList): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <LocationsItem key={city.id} location={city.name} isActive={city.name === currentLocation.name}
          clickHandler={locationsItemClickHandler}
        />
      ))}
    </ul>
  );
}

export default LocationsList;
