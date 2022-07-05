import {useState} from 'react';
import {Button} from '@mui/material';
import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';

import {Banner} from './components/Banner';
import {Banner2} from './components/Banner2';
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
          flex-direction: column;
        `}
      >
        <Banner2 isAnimate={animate} />
        <Banner isAnimate={animate} />
        <Banner2 isAnimate={animate} />
      </div>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
