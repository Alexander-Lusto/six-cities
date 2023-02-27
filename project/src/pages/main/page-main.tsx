import Main from '../../components/main/main';
import { Offer } from '../../types/offer';

interface IPageMainProps {
  offers: Offer[];
}

function PageMain(props: IPageMainProps): JSX.Element {
  return (
    <Main offers={props.offers} />
  );
}

export default PageMain;
