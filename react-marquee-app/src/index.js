import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import {Button} from '@mui/material';
import styled from '@emotion/styled';
import gsap from 'gsap';
import './index.scss';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="outlined" className={css``}>
        Do
      </Button>
      <div className={cx(css``, `marquee`)}>
        <span className="marquee__inner">Cowboy Bebop</span>
      </div>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
