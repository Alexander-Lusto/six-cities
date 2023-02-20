import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';

const CARDS_NUMBER = 5;
const AUTHORIZATION_TOKEN = false;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App cardsNumber={CARDS_NUMBER} authorizationToken={AUTHORIZATION_TOKEN} />
    </BrowserRouter>
  </React.StrictMode>
);
