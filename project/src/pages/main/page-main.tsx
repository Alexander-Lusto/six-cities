import Main from '../../components/main/main';
import { TOffer } from '../../types/offer';

interface IPageMainProps {
  offers: TOffer[];
}

function PageMain(props: IPageMainProps): JSX.Element {
  return (
    <Main offers={props.offers} />
  );
}

export default PageMain;
