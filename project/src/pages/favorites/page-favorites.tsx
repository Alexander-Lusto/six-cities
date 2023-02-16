import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Favorites from '../../components/favorites/favorites';

type Props = {
  isAuthorized: boolean;
}

function PageFavorites(props: Props): JSX.Element {
  return (
    <div className='page'>
      <Header isAuthorized={props.isAuthorized}></Header>
      <Favorites />
      <Footer></Footer>
    </div>
  );
}

export default PageFavorites;
