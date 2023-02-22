import Main from '../../components/main/main';

interface IPageMainProps {
  cardsNumber: number;
}

function PageMain({cardsNumber}: IPageMainProps): JSX.Element {
  return (
    <Main cardsNumber={cardsNumber} />
  );
}

export default PageMain;
