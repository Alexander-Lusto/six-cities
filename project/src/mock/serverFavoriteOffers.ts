import { mockServerOffers } from './serverOffers';

export const mockFavoriteServerOffers = mockServerOffers.filter((el) => el.is_favorite);
