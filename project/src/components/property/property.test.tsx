import Property from './property';
import { render, screen } from '@testing-library/react';
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

describe('Component: SubmitReviewForm', () => {
  test('should render correctly', () => {

    render(
      <Provider store={mockStore(authorizedState)} >
        <MemoryRouter initialEntries={[Path.Room]}>
          <Routes>
            <Route path={Path.Room} element={<Property />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('What\'s inside')).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});
