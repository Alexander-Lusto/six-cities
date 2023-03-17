import Card from './card';
import { render, screen } from '@testing-library/react';
import { mockOffers } from '../../mock/offers';
import { CardClassName } from '../../const';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { TState } from '../../types/state';
import { Action } from 'redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';
import { initialState } from '../../mock/state';
import { Provider } from 'react-redux';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore < TState, Action, ThunkDispatch<TState, typeof api, Action >> (middlewares);

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
            <Route path={Path.SignIn} element={<h1>This is Login Page</h1>} />
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
            <Route path={Path.SignIn} element={<h1>This is Login Page</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByAltText(/Place preview/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));
    expect(screen.queryByAltText(/Place preview/i)).not.toBeInTheDocument();
    expect(screen.getByText(/This is Login Page/i)).toBeInTheDocument();
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
            <Route path={`${Path.Room}/${offer.id}`} element={<h1>This is Property Page</h1>} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByAltText(/Place preview/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('link'));
    expect(screen.queryByAltText(/Place preview/i)).not.toBeInTheDocument();
    expect(screen.getByText(/This is Property Page/i)).toBeInTheDocument();
  });
});
