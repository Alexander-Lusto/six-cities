import LocationsItem from './locations-item';
import { render, screen } from '@testing-library/react';
import { cities } from '../../../../const';
import mockStore from '../../../../mock/store';
import { Provider } from 'react-redux';
import { initialState } from '../../../../mock/state';

describe('Component: LocationsItem', () => {

  test('Should render properly', () => {
    const city = cities[0];
    render(
      <Provider store={mockStore(initialState)}>
        <LocationsItem locationID={city.id} locationName={city.name} isActive />
      </Provider>
    );

    expect(screen.getByText(cities[0].name)).toBeInTheDocument();
  });
});
