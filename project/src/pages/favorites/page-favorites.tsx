import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Favorites from '../../components/favorites/favorites';

function PageFavorites(): JSX.Element {
  return (
    <div className='page'>
      <Header></Header>
      <Favorites />
      <Footer></Footer>
    </div>
  );
}

export default PageFavorites;
