import Card from './card';
import { CardClassName } from '../../const';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockOffers } from '../../mock/offers';
import { Routes, Route } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';
import { initialState } from '../../mock/state';
import { Provider } from 'react-redux';
import mockStore from '../../mock/store';

describe('Component Card', () => {

  test('Should render correctly', async () => {
    const onMousEnter = jest.fn();
    const onMousLeave = jest.fn();

    render(
      <Provider store={mockStore(initialState)} >
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element={
              <Card offer={mockOffers[0]} className={CardClassName.Main} onMouseEnter={onMousEnter} onMouseLeave={onMousLeave} />
            }
            />
            <Route path={Path.SignIn} element={<h1>Login Page</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByAltText(/Place preview/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    await userEvent.hover(screen.getByAltText(/Place preview/i));
    await userEvent.unhover(screen.getByAltText(/Place preview/i));
    expect(onMousEnter).toBeCalled();
    expect(onMousLeave).toBeCalled();
  });

  test('Should navigate to Login Page when user is not authorized and press "Add to favorite" button', async () => {
    const onMousEnter = jest.fn();
    const onMousLeave = jest.fn();

    render(
      <Provider store={mockStore(initialState)} >
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element={
              <Card offer={mockOffers[0]} className={CardClassName.Main} onMouseEnter={onMousEnter} onMouseLeave={onMousLeave} />
            }
            />
            <Route path={Path.SignIn} element={<h1>Login Page</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByAltText(/Place preview/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));
    expect(screen.queryByAltText(/Place preview/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
  });

  test('Should navigate to Property Page if card title is clicked', async () => {
    const onMousEnter = jest.fn();
    const onMousLeave = jest.fn();
    const offer = mockOffers[0];

    render(
      <Provider store={mockStore(initialState)} >
        <MemoryRouter initialEntries={[Path.Main]}>
          <Routes>
            <Route path={Path.Main} element={
              <Card offer={offer} className={CardClassName.Main} onMouseEnter={onMousEnter} onMouseLeave={onMousLeave} />
            }
            />
            <Route path={`${Path.Room}/${offer.id}`} element={<h1>Property Page</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByAltText(/Place preview/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('link'));
    expect(screen.queryByAltText(/Place preview/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Property Page/i)).toBeInTheDocument();
  });
});
