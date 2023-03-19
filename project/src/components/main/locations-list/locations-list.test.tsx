import LocationsList from './locations-list';
import { render, screen } from '@testing-library/react';
import { cities } from '../../../const';
import mockStore from '../../../mock/store';
import { Provider } from 'react-redux';
import { initialState } from '../../../mock/state';

describe('Component: LocationsList', () => {

  test('Should render properly', () => {
    const location = cities[3];
    render(
      <Provider store={mockStore(initialState)}>
        <LocationsList currentLocation={location} />
      </Provider>
    );

    cities.forEach((city) => {
      expect(screen.getByText(city.name)).toBeInTheDocument();
    });
  });
});
