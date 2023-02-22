import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { offers } from './mock/offers';

const AUTHORIZATION_TOKEN = false;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authorizationToken={AUTHORIZATION_TOKEN} offers={offers} />
    </BrowserRouter>
  </React.StrictMode>
);
