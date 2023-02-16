import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Property from '../../components/property/property';

type Props = {
  isAuthorized: boolean;
}

function PageRoom(props: Props): JSX.Element {
  return (
    <div className='page'>
      <Header isAuthorized={props.isAuthorized}></Header>
      <Property />
      <Footer></Footer>
    </div>
  );
}

export default PageRoom;
