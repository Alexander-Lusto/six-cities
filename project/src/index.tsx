import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';

const CARDS_NUMBER = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App cardsNumber={CARDS_NUMBER} />
    </React.StrictMode>
  </BrowserRouter>
);
