import Footer from '../../components/footer/footer';
import Property from '../../components/property/property';
import { TOffer } from '../../types/offer';
import { TCity } from '../../types/city';

interface IPageRoomProps {
  offers: TOffer[];
  currentLocation: TCity;
}

function PageRoom(props: IPageRoomProps): JSX.Element {
  return (
    <>
      <Property offers={props.offers} currentLocation={props.currentLocation}/>
      <Footer></Footer>
    </>
  );
}

export default PageRoom;
