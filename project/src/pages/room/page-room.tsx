import Footer from '../../components/footer/footer';
import Property from '../../components/property/property';
import { Offer } from '../../types/offer';

interface IPageRoomProps {
  offer: Offer;
  offers: Offer[];
}

function PageRoom(props: IPageRoomProps): JSX.Element {
  return (
    <>
      <Property offer={props.offer} offers={props.offers}/>
      <Footer></Footer>
    </>
  );
}

export default PageRoom;
