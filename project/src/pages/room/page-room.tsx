import Footer from '../../components/footer/footer';
import Property from '../../components/property/property';
import { Offer } from '../../types/offer';
import { City } from '../../types/types';

interface IPageRoomProps {
  offers: Offer[];
  currentLocation: City;
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
