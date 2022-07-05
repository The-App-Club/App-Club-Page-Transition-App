import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import {PageTransition} from './routes';
import './index.scss';

const App = () => (
  <BrowserRouter>
    <PageTransition />
  </BrowserRouter>
);
const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
