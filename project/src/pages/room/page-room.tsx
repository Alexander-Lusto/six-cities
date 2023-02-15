import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Property from '../../components/property/property';

function PageRoom(): JSX.Element {
  return (
    <div className='page'>
      <Header></Header>
      <Property />
      <Footer></Footer>
    </div>
  );
}

export default PageRoom;
