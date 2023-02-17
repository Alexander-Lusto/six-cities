import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Favorites from '../../components/favorites/favorites';
import { Offer } from '../../types/offer';

type Props = {
  isAuthorized: boolean;
  offers: Offer[];
}

function PageFavorites(props: Props): JSX.Element {
  return (
    <div className='page'>
      <Header isAuthorized={props.isAuthorized}></Header>
      <Favorites offers={props.offers} />
      <Footer></Footer>
    </div>
  );
}

export default PageFavorites;
