import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import {offers} from './mock/offers';

const AUTHORIZATION_TOKEN = true;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App authorizationToken={AUTHORIZATION_TOKEN} offers={offers}/>
    </React.StrictMode>
  </BrowserRouter>
);
