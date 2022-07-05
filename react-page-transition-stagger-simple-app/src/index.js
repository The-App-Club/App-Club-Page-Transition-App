import {createRoot} from 'react-dom/client';
import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AboutPage} from './pages/about';
import {HomePage} from './pages/home';

import '@fontsource/kaushan-script';
import './styles/index.scss';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  return (
    <Routes>
      <Route
        path={'/'}
        element={<HomePage loading={loading} setLoading={setLoading} />}
      ></Route>
      <Route
        path={'/about'}
        element={<AboutPage loading={loading} setLoading={setLoading} />}
      ></Route>
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
