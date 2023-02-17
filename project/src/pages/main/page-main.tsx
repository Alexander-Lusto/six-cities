import Header from '../../components/header/header';
import Main from '../../components/main/main';
import { Offer } from '../../types/offer';

type Props = {
  isAuthorized: boolean;
  offers: Offer[];
}

function PageMain(props: Props): JSX.Element {
  return (
    <div className='page'>
      <Header isAuthorized={props.isAuthorized}></Header>
      <Main offers={props.offers}/>
    </div>
  );
}

export default PageMain;
