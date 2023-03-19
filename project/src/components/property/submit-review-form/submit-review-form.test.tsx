import SubmitReviewForm from './submit-review-form';
import { render, screen } from '@testing-library/react';
import { authorizedState } from '../../../mock/state';
import mockStore from '../../../mock/store';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../../const';
import { Provider } from 'react-redux';

describe('Component: SubmitReviewForm', () => {
  test('should render correctly', () => {

    render(
      <Provider store={mockStore(authorizedState)} >
        <MemoryRouter initialEntries={[Path.Room]}>
          <Routes>
            <Route path={Path.Room} element={<SubmitReviewForm />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );


    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
