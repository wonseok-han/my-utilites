/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */

import './index.css';
import React from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

if (document.getElementById('root').hasChildNodes()) {
  hydrateRoot(
    document.getElementById('root'),
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}
