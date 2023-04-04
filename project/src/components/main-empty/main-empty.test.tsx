import MainEmpty from './main-empty';
import { render, screen } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';
import { authorizedState } from '../../mock/state';
import { Provider } from 'react-redux';
import mockStore from '../../mock/store';

describe('Component: MainEmpty', () => {
  test('should render correctly', () => {
    render(
      <Provider store={mockStore(authorizedState)} >
        <MemoryRouter initialEntries={[Path.Favorites]}>
          <Routes>
            <Route path={Path.Favorites} element={<MainEmpty />}/>
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
