import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './store/reducer';
import { Provider } from 'react-redux';
import { createAPI } from './services/api';
import { TThunkAppDispatch } from './types/action';
import { checkAuthAction } from './store/api-actions';
import { fetchOffersAction } from './store/api-actions';

const api = createAPI();
const store = configureStore({ reducer, devTools: true, middleware: [thunk.withExtraArgument(api)] });
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

(store.dispatch as TThunkAppDispatch)(checkAuthAction());
(store.dispatch as TThunkAppDispatch)(fetchOffersAction());

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
