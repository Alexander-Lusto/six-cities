import Footer from '../../components/footer/footer';
import Property from '../../components/property/property';
import { Offer } from '../../types/offer';

interface IPageRoomProps {
  offers: Offer[];
}

function PageRoom(props: IPageRoomProps): JSX.Element {
  return (
    <>
      <Property offers={props.offers} />
      <Footer></Footer>
    </>
  );
}

export default PageRoom;
