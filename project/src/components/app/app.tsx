import Main from '../main/main';
import Header from '../header/header';
import Page from '../page/page';

type Props = {
  cardsNumber: number;
};

function App(props: Props): JSX.Element {
  const { cardsNumber } = props;

  return (
    <Page>
      <>
        <Header></Header>
        <Main cardsNumber={cardsNumber} />
      </>
    </Page>
  );
}

export default App;
