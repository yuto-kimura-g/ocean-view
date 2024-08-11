import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ReactGA from 'react-ga4';

const GA_TRACKING_ID = 'G-M9MG85G3H8';
ReactGA.initialize(GA_TRACKING_ID);
ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
  title: document.title,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
