import LocationsItem from '../locations-item/locations-item';
import { cities } from '../../../const';
import { TCity } from '../../../types/city';

interface ILocationsList {
  currentLocation: TCity;
}

function LocationsList({currentLocation}: ILocationsList): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <LocationsItem key={city.id} locationName={city.name} locationID={city.id} isActive={city.name === currentLocation.name} />
      ))}
    </ul>
  );
}

export default LocationsList;
