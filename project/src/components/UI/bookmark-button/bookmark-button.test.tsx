import BookmarkButton from './bookmark-button';
import { render, screen } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../../const';
import { initialState } from '../../../mock/state';
import { Provider } from 'react-redux';
import mockStore from '../../../mock/store';


describe('Component: BookmarkButton', () => {
  test('should render correctly when it is active', () => {
    render(
      <Provider store={mockStore(initialState)} >
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element={
              <BookmarkButton id={0} isFavorite isPropertyPage={false}/>
            }
            />
            <Route path={Path.SignIn} element={<h1>Login Page</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/In bookmarks/i)).toBeInTheDocument();
  });

  test('should render correctly when button it not active', () => {

    render(
      <Provider store={mockStore(initialState)} >
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element={
              <BookmarkButton id={0} isFavorite={false} isPropertyPage={false}/>
            }
            />
            <Route path={Path.SignIn} element={<h1>Login Page</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/To bookmarks/i)).toBeInTheDocument();
  });
});

