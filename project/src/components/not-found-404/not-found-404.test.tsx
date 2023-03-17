import NotFound404 from './not-found-404';
import { render, screen } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';

describe('Component: NotFound404', () => {
  test('Should render correctly', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });

  test('Should redirect to root element when clicked to link', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/fake']}>
        <Routes>
          <Route path={Path.Main} element={<h1>This is the main page</h1>} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText(/This is the main page/i)).not.toBeInTheDocument();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    await user.click(screen.getByRole('link'));
    expect(screen.getByText(/This is the main page/i)).toBeInTheDocument();
  });
});
