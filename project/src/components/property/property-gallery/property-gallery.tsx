import ImageWrapper from './image-wrapper/image-wrapper';
import { Offer } from '../../../types/offer';

interface PropertyGalleryProps {
  offer: Offer;
}

function PropertyGallery({ offer }: PropertyGalleryProps): JSX.Element {
  return(
    <div className="property__gallery">
      {offer.images.map((src) => <ImageWrapper src={src} key={src}></ImageWrapper>)}
    </div>
  );
}

export default PropertyGallery;
