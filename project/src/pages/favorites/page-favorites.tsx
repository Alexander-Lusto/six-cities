import Favorites from '../../components/favorites/favorites';
import { TOffer } from '../../types/offer';

interface IPageFavoritesProps {
  offers: TOffer[];
}

function PageFavorites(props: IPageFavoritesProps): JSX.Element {
  return (
    <Favorites offers={props.offers} />
  );
}

export default PageFavorites;
