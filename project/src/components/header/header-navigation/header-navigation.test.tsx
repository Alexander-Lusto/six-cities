import HeaderNavigation from './header-navigation';
import { render, screen } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../../const';
import mockStore from '../../../mock/store';
import { Provider } from 'react-redux';
import { authorizedState, unAuthorizedState } from '../../../mock/state';
import { mockAuthInfo } from '../../../mock/authInfo';

describe('Component: HeaderNavigation', () => {

  test('should render correctly when user is not authorized', () => {
    render(
      <Provider store={mockStore(unAuthorizedState)}>
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element={<HeaderNavigation />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );


    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  test('should render correctly when user is authorized', () => {
    Storage.prototype.getItem = () => JSON.stringify(mockAuthInfo);

    render(
      <Provider store={mockStore(authorizedState)}>
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element={<HeaderNavigation />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });


});
