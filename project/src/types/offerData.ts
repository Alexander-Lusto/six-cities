import { TOffer } from './offer';
import { TComment } from './comment';

export type TOfferData = {
  comments: TComment[];
  offer: TOffer;
  offersNearby: TOffer[];
};
