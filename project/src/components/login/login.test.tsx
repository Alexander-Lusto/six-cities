import Login from './login';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Path } from '../../const';
import { AuthorizationStatus } from '../../const';
import { createAPI } from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { TState } from '../../types/state';
import {Action} from 'redux';
import { initialState } from '../../mock/state';


const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<TState, Action, ThunkDispatch<TState, typeof api, Action>>(middlewares);

describe('Component: MainEmpty', () => {

  test('should render correctly', async () => {
    const user = userEvent.setup();

    render(
      <Provider store={mockStore(initialState)} >
        <MemoryRouter initialEntries={[Path.SignIn]}>
          <Routes>
            <Route path={Path.SignIn} element={<Login />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByTestId('sign-in')).toBeInTheDocument();

    await user.type(screen.getByPlaceholderText('Email'), 'keks123@mail.ru');
    await user.type(screen.getByPlaceholderText('Password'), 'qwerty');

    expect(screen.getByDisplayValue(/keks123@mail.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/qwerty/i)).toBeInTheDocument();
  });

  test('should redirect to the Main Page if user is authorized', () => {
    const authState = Object.assign({}, initialState , {AUTHORIZATION: {authStatus: AuthorizationStatus.Auth}});

    render(
      <Provider store={mockStore(authState)} >
        <MemoryRouter initialEntries={[Path.SignIn]}>
          <Routes>
            <Route path={Path.Main} element={<h1>This is the main page</h1>} />
            <Route path={Path.SignIn} element={<Login />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/This is the main page/i)).toBeInTheDocument();
  });
});
