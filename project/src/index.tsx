import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './store/reducer';
import { Provider } from 'react-redux';

const AUTHORIZATION_TOKEN = 'tWPTWn2$OdVAogNh2kzr$uBgPP*w3&5W^uZ7VrxcfW!pdMhD7JiMwSs#2WXJi7mTgYDOa&';
const store = configureStore({reducer, devTools: true});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App authorizationToken={AUTHORIZATION_TOKEN} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
