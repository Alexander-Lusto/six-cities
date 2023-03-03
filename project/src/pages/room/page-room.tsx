import Footer from '../../components/footer/footer';
import Property from '../../components/property/property';
import { TOffer } from '../../types/offer';

interface IPageRoomProps {
  offers: TOffer[];
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
