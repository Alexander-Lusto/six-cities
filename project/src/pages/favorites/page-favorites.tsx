import Favorites from '../../components/favorites/favorites';
import { Offer } from '../../types/offer';

interface IPageFavoritesProps {
  offers: Offer[];
}

function PageFavorites(props: IPageFavoritesProps): JSX.Element {
  return (
    <Favorites offers={props.offers} />
  );
}

export default PageFavorites;
