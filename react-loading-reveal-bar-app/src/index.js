import {useState} from 'react';
import {Button} from '@mui/material';
import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';

import {Banner as B1} from './components/Banner';
import {Banner as B5} from './components/Banner5';
import {Banner as B6} from './components/Banner6';
import {Banner as B2} from './components/Banner2';
import {Banner as B3} from './components/Banner3';
import {Banner as B4} from './components/Banner4';

import '@fontsource/kaushan-script';
import './index.scss';

const App = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = (e) => {
    setAnimate((animate) => {
      return !animate;
    });
  };

  return (
    <>
      <Button variant={'outlined'} onClick={handleClick}>
        Do
      </Button>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          {/* <B1 isAnimate={animate} /> */}
          {/* <B5 isAnimate={animate} /> */}
          <B6 isAnimate={animate} />
        </div>
        {/* <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <B3 isAnimate={animate} />
          <B4 isAnimate={animate} />
        </div> */}
      </div>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
