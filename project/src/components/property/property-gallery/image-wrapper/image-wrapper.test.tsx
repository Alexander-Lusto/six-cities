import ImageWrapper from './image-wrapper';
import { render, screen } from '@testing-library/react';
import { mockOffers } from '../../../../mock/offers';

describe('Component: ImageWrapper', () => {
  test('should render correctly', () => {
    const offer = mockOffers[0];
    const src = offer.images[0];

    render(
      <ImageWrapper src={src}/>
    );

    expect(screen.getByAltText(/Photo studio/i)).toBeInTheDocument();
  });
});
