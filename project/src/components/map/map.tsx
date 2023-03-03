import { MapContainer, TileLayer, Marker, useMap} from 'react-leaflet'; // useMap
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { TCity } from '../../types/city';
import { TPoint } from '../../types/point';

export const URL_MARKER_DEFAULT = './img/pin.svg';
export const URL_MARKER_CURRENT = './img/pin-active.svg';

const defaultIcon = L.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
});

const currentIcon = L.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
});

interface IChangeViewProps {
  center: L.LatLngExpression;
  zoom: number;
}

function ChangeView(props: IChangeViewProps) {
  const { center, zoom } = props;
  const map = useMap();
  map.flyTo(center, zoom);
  return null;
}

interface IMapInterface {
  points: TPoint[];
  city: TCity;
  selectedPoint: TPoint | undefined;
}

function Map({points, city, selectedPoint}: IMapInterface):JSX.Element {

  return (
    <MapContainer className="cities__map" style={{ height: '100%' }} center={[city.lat, city.lng]} zoom={city.zoom} scrollWheelZoom>
      <ChangeView center={[city.lat, city.lng]} zoom={city.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((point: TPoint): JSX.Element => (
        <Marker position={[point.latitude, point.longitude]} icon={selectedPoint === point ? currentIcon : defaultIcon} key={point.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
