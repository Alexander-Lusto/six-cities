import Main from '../../components/main/main';
import { TOffer } from '../../types/offer';
import { TCity } from '../../types/city';

interface IPageMainProps {
  offers: TOffer[];
  currentLocation: TCity;
}

function PageMain(props: IPageMainProps): JSX.Element {
  return (
    <Main offers={props.offers} currentLocation={props.currentLocation}/>
  );
}

export default PageMain;
