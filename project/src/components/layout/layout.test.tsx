import Layout from './layout';
import { render, screen } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';
import mockStore from '../../mock/store';
import { Provider } from 'react-redux';
import { initialState } from '../../mock/state';

describe('Component: Layout', () => {

  test('should render URL "/" correctly', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<h1>Main Page</h1>} />
              <Route path="login" element={<h1>Login Page</h1>} />
              <Route path="favorites" element={<h1>Favorites Page</h1>}/>
              <Route path="offer/:id" element={<h1>Property Page</h1>} />
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );


    expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
  });

  test('should render URL "/login" correctly', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialEntries={[Path.SignIn]}>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<h1>Main Page</h1>} />
              <Route path="login" element={<h1>Login Page</h1>} />
              <Route path="favorites" element={<h1>Favorites Page</h1>}/>
              <Route path="offer/:id" element={<h1>Property Page</h1>} />
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );


    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
  });

  test('should render URL "/favorites" correctly', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialEntries={[Path.Favorites]}>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<h1>Main Page</h1>} />
              <Route path="login" element={<h1>Login Page</h1>} />
              <Route path="favorites" element={<h1>Favorites Page</h1>}/>
              <Route path="offer/:id" element={<h1>Property Page</h1>} />
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );


    expect(screen.getByText(/Favorites Page/i)).toBeInTheDocument();
  });

  test('should render URL "/offer/:id" correctly', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialEntries={[`${Path.Room}/${1}`]}>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<h1>Main Page</h1>} />
              <Route path="login" element={<h1>Login Page</h1>} />
              <Route path="favorites" element={<h1>Favorites Page</h1>}/>
              <Route path="offer/:id" element={<h1>Property Page</h1>} />
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );


    expect(screen.getByText(/Property Page/i)).toBeInTheDocument();
  });

  test('should render URL "/404-page-not-found" correctly', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <MemoryRouter initialEntries={['/404-page-not-found']}>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<h1>Main Page</h1>} />
              <Route path="login" element={<h1>Login Page</h1>} />
              <Route path="favorites" element={<h1>Favorites Page</h1>}/>
              <Route path="offer/:id" element={<h1>Property Page</h1>} />
              <Route path="*" element={<h1>404 Page Not Found</h1>} />
            </Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );


    expect(screen.getByText(/404 Page Not Found/i)).toBeInTheDocument();
  });
});
