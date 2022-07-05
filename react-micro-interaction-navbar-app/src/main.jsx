import {createRoot} from 'react-dom/client';
import {useState} from 'react';
import {css} from '@emotion/css';
import '@fontsource/inter';
import './styles/index.scss';

import {Nav} from './components/Nav';

const App = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      `}
    >
      <Nav />
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
