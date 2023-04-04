import RequireAuth from './requireAuth';
import { render, screen } from '@testing-library/react';
import { authorizedState, unAuthorizedState } from '../../mock/state';
import mockStore from '../../mock/store';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

describe('Component: RequireAuth', () => {

  test('Should render child component if user is authorized', () => {
    render(
      <MemoryRouter initialEntries={[Path.Favorites]}>
        <Provider store={mockStore(authorizedState)} >
          <Routes>
            <Route path={Path.Favorites} element=
              {
                <RequireAuth>
                  <h1>Favorites Page</h1>
                </RequireAuth>
              }
            />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Favorites Page/i)).toBeInTheDocument();
  });

  test('Should redirect to the Login Page if user is not authorized', () => {
    render(
      <MemoryRouter initialEntries={[Path.Favorites]}>
        <Provider store={mockStore(unAuthorizedState)} >
          <Routes>
            <Route path={Path.Favorites} element=
              {
                <RequireAuth>
                  <h1>Favorites Page</h1>
                </RequireAuth>
              }
            />
            <Route path={Path.SignIn} element={<h1>Login Page</h1>}/>
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
  });
});
