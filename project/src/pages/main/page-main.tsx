import Main from '../../components/main/main';
import { Offer } from '../../types/offer';
import { City } from '../../types/types';

interface IPageMainProps {
  offers: Offer[];
  currentLocation: City;
}

function PageMain(props: IPageMainProps): JSX.Element {
  return (
    <Main offers={props.offers} currentLocation={props.currentLocation}/>
  );
}

export default PageMain;
