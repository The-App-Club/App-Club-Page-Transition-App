import {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './index.scss';

import {css} from '@emotion/css';
import {Button} from '@mui/material';

const App = ({context}) => {
  const progressDomRef = useRef(null);
  const progressValueRef = useRef(0);
  const reqAnimIdRef = useRef(0);
  const [isHover, setIsHover] = useState(false);
  const [progress, setProgress] = useState(0);
  const [disablePlay, setDisablePlay] = useState(false);

  function marquee({isHover}, callback) {
    const now = new Date();
    if (!isHover) {
      cancelAnimationFrame(reqAnimIdRef.current);
    } else {
      reqAnimIdRef.current = requestAnimationFrame(() => {
        marquee({isHover}, callback);
      });
    }
    callback(now);
  }

  useEffect(() => {
    marquee({isHover}, (e) => {
      if (isHover) {
        progressValueRef.current = progressValueRef.current + 1;
        if (progressValueRef.current < 101) {
          progressDomRef.current.style.width = progressValueRef.current + '%';
          progressDomRef.current.innerHTML = progressValueRef.current + '%';
          setProgress(progressValueRef.current);
          setDisablePlay(true);
        } else {
          setIsHover(false);
        }
      } else {
        if (progressValueRef.current === 100) {
          progressValueRef.current = 0;
          setDisablePlay(true);
        }
      }
    });
    // eslint-disable-next-line
  }, [isHover]);

  const handleReset = (e) => {
    if (reqAnimIdRef.current && isHover) {
      cancelAnimationFrame(reqAnimIdRef.current);
      setIsHover(false);
    }
    progressDomRef.current.style.width = `0px`;
    progressValueRef.current = 0;
    setProgress(progressValueRef.current);
    progressDomRef.current.innerHTML = progressValueRef.current + '%';
    setDisablePlay(false);
  };

  const handlePlay = (e) => {
    setIsHover(true);
  };

  const handlePause = (e) => {
    setIsHover(false);
    if (progressValueRef.current < 101) {
      setDisablePlay(false);
    } else {
      setDisablePlay(true);
    }
  };
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}
    >
      <div
        ref={progressDomRef}
        className={css`
          width: 0px;
          min-height: 3rem;
          background: orangered;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          align-self: flex-start;
          margin: 1rem 0;
          color: whitesmoke;
          font-weight: 900;
          font-size: 3rem;
        `}
      >
        0%
      </div>
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
        className={css`
          width: 200px;
          height: 200px;
        `}
      />
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin: 1rem 0 0;
        `}
      >
        <Button variant="outlined" onClick={handleReset}>
          ReSet
        </Button>
        <Button variant="outlined" onClick={handlePlay} disabled={disablePlay}>
          Play
        </Button>
        <Button variant="outlined" onClick={handlePause}>
          Pause
        </Button>
      </div>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
