import PropertyGallery from './property-gallery';
import { render, screen } from '@testing-library/react';
import { mockOffers } from '../../../mock/offers';

describe('Component: PropertyGallery', () => {
  test('should render correctly', () => {
    const offer = mockOffers[1];

    render(
      <PropertyGallery offer={offer}/>
    );

    expect(screen.queryAllByAltText(/Photo studio/i)).toHaveLength(offer.images.length);
  });
});
