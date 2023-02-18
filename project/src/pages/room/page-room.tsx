import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Property from '../../components/property/property';
import { Offer } from '../../types/offer';

type Props = {
  isAuthorized: boolean;
  offer: Offer;
  offers: Offer[];
}

function PageRoom(props: Props): JSX.Element {
  return (
    <div className='page'>
      <Header isAuthorized={props.isAuthorized}></Header>
      <Property offer={props.offer} offers={props.offers}/>
      <Footer></Footer>
    </div>
  );
}

export default PageRoom;
