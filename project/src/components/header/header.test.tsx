import Header from './header';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';
import mockStore from '../../mock/store';
import { Provider } from 'react-redux';
import { initialState } from '../../mock/state';

describe('Component: Headerq', () => {

  test('should render correctly when it is Login Page', () => {
    render(
      <MemoryRouter initialEntries={[Path.SignIn]}>
        <Routes>
          <Route path={Path.SignIn} element={<Header isLoginPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument();
  });

  test('should render correctly when it is not Login Page', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element={<Header />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );


    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
  });

  test('should navigate to the Main Page when link is clicked', async () => {
    render(
      <MemoryRouter initialEntries={[Path.SignIn]}>
        <Routes>
          <Route path={Path.SignIn} element={<Header isLoginPage/>}/>
          <Route path={Path.Main} element={<h1>Main Page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    await userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
  });
});
