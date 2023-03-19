import LocationsItem from './locations-item';
import { render, screen } from '@testing-library/react';
import { mockOffers } from '../../../mock/offers';
import { cities } from '../../../const';

describe('Component: LocationsItem', () => {
  test('should render correctly', () => {
    const cityName = cities[3].name;
    const cardsAmount = mockOffers.filter((offer) => offer.city.name === cityName).length;

    render(
      <LocationsItem location={cityName} offers={mockOffers} />
    );

    expect(screen.getByText(cityName)).toBeInTheDocument();
    expect(screen.queryAllByAltText(/Place image/i)).toHaveLength(cardsAmount);
  });
});
