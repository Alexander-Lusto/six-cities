import ImageWrapper from './image-wrapper/image-wrapper';
import { TOffer } from '../../../types/offer';

interface PropertyGalleryProps {
  offer: TOffer;
}

function PropertyGallery({ offer }: PropertyGalleryProps): JSX.Element {
  return(
    <div className="property__gallery">
      {offer.images.map((src) => <ImageWrapper src={src} key={src} />)}
    </div>
  );
}

export default PropertyGallery;
