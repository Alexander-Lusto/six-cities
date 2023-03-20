import LocationsItem from './locations-item';
import { render, screen } from '@testing-library/react';
import { mockOffers } from '../../../mock/offers';
import { cities } from '../../../const';

import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../../const';
import { authorizedState } from '../../../mock/state';
import { Provider } from 'react-redux';
import mockStore from '../../../mock/store';

describe('Component: LocationsItem', () => {
  test('should render correctly', () => {
    const cityName = cities[3].name;
    const cardsAmount = mockOffers.filter((offer) => offer.city.name === cityName).length;

    render(
      <Provider store={mockStore(authorizedState)} >
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element=
              {
                <LocationsItem location={cityName} offers={mockOffers} />
              }
            />
            <Route path={Path.SignIn} element={<h1>Login Page</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(cityName)).toBeInTheDocument();
    expect(screen.queryAllByAltText(/Place image/i)).toHaveLength(cardsAmount);
  });
});
