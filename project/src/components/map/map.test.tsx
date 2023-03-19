import Map from './map';
import { render, screen } from '@testing-library/react';
import { cities } from '../../const';
import { mockOffers } from '../../mock/offers';

describe('Component: Map', () => {
  test('should render correctly', () => {
    const currentLocation = cities[3];
    const localOffers = mockOffers.filter((offer) => offer.city.name === currentLocation.name);
    const points = localOffers.map((offer) => Object.assign({}, offer.location, { id: offer.id }));

    render(
      <Map points={points} city={currentLocation} selectedPoint={undefined} />
    );

    expect(screen.getByTestId('map')).toBeInTheDocument();
    expect(screen.getAllByTestId('point')).toHaveLength(points.length);
  });
});
