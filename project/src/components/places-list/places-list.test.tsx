import PlacesList from './places-list';
import { render, screen } from '@testing-library/react';
import { mockOffers } from '../../mock/offers';
import { initialState } from '../../mock/state';
import mockStore from '../../mock/store';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';
import { Provider } from 'react-redux';

describe('Component: PlacesList', () => {
  test('should render correctly', () => {
    const onActiveOfferChange = jest.fn();
    const cardsAmount = mockOffers.length;

    render(
      <Provider store={mockStore(initialState)} >
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element={
              <PlacesList offers={mockOffers} activeOfferChangeHandler={onActiveOfferChange}
                className={'places-list'} childClassName={'card'}
              />
            }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryAllByAltText(/Place preview/i)).toHaveLength(cardsAmount);
  });
});
