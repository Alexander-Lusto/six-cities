import { MapContainer, TileLayer, Marker} from 'react-leaflet'; // useMap
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { City, Point } from '../../types/types';

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const defaultIcon = L.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [38, 95],
});

const currentIcon = L.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [38, 95],
});

interface IMapInterface {
  points: Point[];
  city: City;
  selectedPoint: Point | undefined;
}

function Map({points, city, selectedPoint}: IMapInterface):JSX.Element {

  return (
    <MapContainer className="cities__map" style={{ height: '100%' }} center={[city.lat, city.lng]} zoom={city.zoom} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((point: Point): JSX.Element => (
        <Marker position={[point.latitude, point.longitude]} icon={selectedPoint === point ? currentIcon : defaultIcon} key={point.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
