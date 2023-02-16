import Header from '../../components/header/header';
import Main from '../../components/main/main';

type Props = {
  cardsNumber: number;
  isAuthorized: boolean;
}

function PageMain(props: Props): JSX.Element {
  return (
    <div className='page'>
      <Header isAuthorized={props.isAuthorized}></Header>
      <Main cardsNumber={props.cardsNumber} />
    </div>
  );
}

export default PageMain;
