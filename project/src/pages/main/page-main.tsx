import Main from '../../components/main/main';
import { Offer } from '../../types/offer';

interface IPageMainProps {
  offers: Offer[];
  currentLocation: string;
}

function PageMain(props: IPageMainProps): JSX.Element {
  return (
    <Main offers={props.offers} currentLocation={props.currentLocation}/>
  );
}

export default PageMain;
