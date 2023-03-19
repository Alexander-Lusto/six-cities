import Main from './main';
import { render, screen } from '@testing-library/react';
import { mockOffers } from '../../mock/offers';
import { authorizedState } from '../../mock/state';
import mockStore from '../../mock/store';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';
import { Provider } from 'react-redux';

jest.mock('react-leaflet', () => ({
  MapContainer: jest.fn(),
  TileLayer: jest.fn(),
  Marker: jest.fn(),
  useMap: jest.fn(),
}));

describe('Component: Main', () => {
  test('should render correctly', () => {
    const currentLocation = authorizedState.MAIN.currentCity;
    const localOffers = mockOffers.filter((offer) => offer.city.name === currentLocation.name);
    const cardsNumber = localOffers.length;

    render(
      <Provider store={mockStore(authorizedState)} >
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element={<Main offers={mockOffers} />}/>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    //expect(screen.getByTestId('map')).toBeInTheDocument();
    expect(screen.queryAllByAltText(/Place preview/i)).toHaveLength(cardsNumber);
    expect(screen.getByText(currentLocation.name)).toBeInTheDocument();
    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
  });

  test('should render EmptyMain component when there are no offers', () => {

    render(
      <Provider store={mockStore(authorizedState)} >
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element={<Main offers={[]} />}/>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
