import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import {Button} from '@mui/material';
import {motion, transform} from 'framer-motion';
import * as d3 from 'd3';
import './index.scss';

const Loading = ({
  l = d3.interpolateBuGn,
  c = 13,
  amplitude = 50,
  duration = 2,
}) => {
  return (
    <motion.div
      className={css`
        display: flex;
      `}
      initial={'initial'}
      animate={'animate'}
      transition={{
        staggerChildren: 0.5,
      }}
    >
      {[...Array(c).keys()].map((n, index) => {
        const color = l(transform([0, c - 1], [0.4, 1])(index));
        return (
          <motion.div
            key={index}
            className={css`
              border-radius: 50%;
              padding: 1rem;
              background: ${color};
            `}
            transition={{
              repeat: Infinity,
              duration: duration,
            }}
            variants={{
              initial: {
                y: amplitude,
              },
              animate: {
                y: [amplitude, 0, amplitude],
              },
            }}
          ></motion.div>
        );
      })}
    </motion.div>
  );
};

const App = () => {
  const handleClick = () => {
    document.body.classList.toggle(`loaded`);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        className={css`
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
        `}
      >
        Do
      </Button>
      <div className="loading-page">
        {/* <Loading
          l={d3.interpolateSpectral}
          c={3}
          amplitude={20}
          duration={1.5}
        /> */}
        <div className="loading-item"></div>
      </div>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
