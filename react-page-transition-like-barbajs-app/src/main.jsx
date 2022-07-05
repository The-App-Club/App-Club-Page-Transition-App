import {createRoot} from 'react-dom/client';
import {cx, css} from '@emotion/css';
import {useEffect, useState, useRef, useMemo} from 'react';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import '@fontsource/inter';
import './styles/index.scss';
import {AboutPage} from './pages/about';
import {HomePage} from './pages/home';

const App = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route exact path={'/about'} element={<AboutPage />} />
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
