import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { offers } from './mock/offers';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './store/reducer';
import { Provider } from 'react-redux';

const AUTHORIZATION_TOKEN = true;
const store = configureStore({reducer, devTools: true});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App authorizationToken={AUTHORIZATION_TOKEN} offers={offers} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
