import Header from '../../components/header/header';
import Main from '../../components/main/main';

function PageMain(props: {cardsNumber: number}): JSX.Element {
  return (
    <div className='page'>
      <Header></Header>
      <Main cardsNumber={props.cardsNumber} />
    </div>
  );
}

export default PageMain;
