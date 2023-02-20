import Main from '../../components/main/main';

type Props = {
  cardsNumber: number;
}

function PageMain(props: Props): JSX.Element {
  return (
    <Main cardsNumber={props.cardsNumber} />
  );
}

export default PageMain;
