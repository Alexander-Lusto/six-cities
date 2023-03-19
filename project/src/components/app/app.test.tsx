import App from './app';
import { render, screen } from '@testing-library/react';
import { authorizedState, initialState, unAuthorizedState } from '../../mock/state';
import mockStore from '../../mock/store';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';
import { Provider } from 'react-redux';
import { mockAuthInfo } from '../../mock/authInfo';


jest.mock('react-leaflet', () => ({
  MapContainer: jest.fn(),
  TileLayer: jest.fn(),
  Marker: jest.fn(),
  useMap: jest.fn(),
}));

describe('Component: SubmitReviewForm', () => {
  Storage.prototype.getItem = () => JSON.stringify(mockAuthInfo);

  test('should render spinner while user\'s authorization status is "unknown"', () => {

    render(
      <MemoryRouter initialEntries={[Path.Main]}>
        <Provider store={mockStore(initialState)} >
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId(/spinner/i)).toBeInTheDocument();
  });

  test('should render the Main Page correctly', () => {

    render(
      <MemoryRouter initialEntries={[Path.Main]}>
        <Provider store={mockStore(authorizedState)} >
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId(/main/i)).toBeInTheDocument();
  });

  test('should render the Login Page correctly', () => {

    render(
      <MemoryRouter initialEntries={[Path.SignIn]}>
        <Provider store={mockStore(unAuthorizedState)} >
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId(/login/i)).toBeInTheDocument();
  });

  test('should render the Favorites Page correctly', () => {

    render(
      <MemoryRouter initialEntries={[Path.Favorites]}>
        <Provider store={mockStore(authorizedState)} >
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId(/favorites/i)).toBeInTheDocument();
  });

  test('should render the Property Page correctly', () => {
    render(
      <MemoryRouter initialEntries={[`${Path.Room}/${1}`]}>
        <Provider store={mockStore(authorizedState)} >
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId(/property/i)).toBeInTheDocument();
  });

  test('should render the Page Not Found 404 when URl is incorrect', () => {
    render(
      <MemoryRouter initialEntries={['/fake-url']}>
        <Provider store={mockStore(authorizedState)} >
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId(/404/i)).toBeInTheDocument();
  });
});
