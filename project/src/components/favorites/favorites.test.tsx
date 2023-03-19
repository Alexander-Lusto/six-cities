import Favorites from './favorites';
import { render, screen } from '@testing-library/react';
import { mockOffers } from '../../mock/offers';
import { initialState } from '../../mock/state';
import mockStore from '../../mock/store';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';
import { Provider } from 'react-redux';

describe('Component: Favorites', () => {
  test('should render correctly', () => {
    const favoriteOffers = mockOffers.filter((offer) => offer.isFavorite);
    const cardsNumber = favoriteOffers.length;
    render(
      <Provider store={mockStore(initialState)} >
        <MemoryRouter initialEntries={[Path.Favorites]}>
          <Routes>
            <Route path={Path.Favorites} element={<Favorites offers={favoriteOffers} />}/>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/Place image/i)).toHaveLength(cardsNumber);
  });
});
