import FavoritesCard from './favorites-card';
import { render, screen } from '@testing-library/react';
import mockStore from '../../../../mock/store';
import { mockOffers } from '../../../../mock/offers';
import userEvent from '@testing-library/user-event';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../../../const';
import { authorizedState } from '../../../../mock/state';
import { Provider } from 'react-redux';
import { TOffer } from '../../../../types/offer';


describe('Component: FavoritesCard', () => {
  test('should render correctly', () => {

    render(

      <Provider store={mockStore(authorizedState)} >
        <MemoryRouter initialEntries={[Path.Favorites]}>
          <Routes>
            <Route path={Path.Favorites} element={<FavoritesCard offer={mockOffers[1]}/>}/>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByAltText(/Place image/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should navigate to the Property Page when title is clicked', async () => {
    const id = 1;
    const mockOffer = mockOffers.find((offer) => offer.id === id) as TOffer;

    render(
      <Provider store={mockStore(authorizedState)} >
        <MemoryRouter initialEntries={[Path.Favorites]}>
          <Routes>
            <Route path={Path.Favorites} element={<FavoritesCard offer={mockOffer}/>}/>
            <Route path={`${Path.Room}/${id}`} element={<h1>Property Page</h1>}/>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByAltText(/Place image/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('link'));
    expect(screen.queryByAltText(/Place preview/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Property Page/i)).toBeInTheDocument();
  });
});
