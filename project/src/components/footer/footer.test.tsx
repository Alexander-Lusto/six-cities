import Footer from './footer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';

describe('Component: Footer', () => {
  test('should render correctly', () => {
    render(
      <MemoryRouter initialEntries={[Path.Room]}>
        <Routes>
          <Route path={Path.Room} element={<Footer />}/>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });

  test('should navigate to the Main Page when link is clicked', async () => {
    render(


      <MemoryRouter initialEntries={[Path.Room]}>
        <Routes>
          <Route path={Path.Room} element={<Footer />}/>
          <Route path={Path.Main} element={<h1>Main Page</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
  });
});
