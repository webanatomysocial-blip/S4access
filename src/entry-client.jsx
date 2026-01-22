import { hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './AppRoutes.jsx';
// import './main.css';

const helmetContext = {};

hydrateRoot(
  document.getElementById('root'),
  <HelmetProvider context={helmetContext}>
    <AppRoutes />
  </HelmetProvider>
);
