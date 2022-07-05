import {css} from '@emotion/css';
import {Grid} from './Grid';
import {useState} from 'react';
import {Button, Slider} from '@mui/material';
const Graph = ({color, progress}) => {
  const [tik, setTik] = useState(true);
  const [debugProgress, setDebugProgress] = useState(0);
  const handleDo = (e) => {
    setTik((tik) => {
      return !tik;
    });
  };
  const handleChange = (e) => {
    setDebugProgress(e.target.value);
  };

  return (
    <>
      <div
        className={css`
          max-width: 300px;
          padding: 1rem;
        `}
      >
        <Button variant={'outlined'} onClick={handleDo}>
          Do
        </Button>
        <Slider
          defaultValue={0}
          value={debugProgress}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleChange}
        />
      </div>
      <div
        className={css`
          display: grid;
          place-items: center;
          min-height: 100vh;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: flex-end;
            gap: 3rem;
          `}
        >
          <Grid
            color={color(0.4)}
            count={7}
            isReverse={tik}
            progress={progress}
            debugProgress={debugProgress}
          />
          <Grid
            color={color(0.5)}
            count={3}
            isReverse={tik}
            progress={progress}
            debugProgress={debugProgress}
          />
          <Grid
            color={color(0.6)}
            count={6}
            isReverse={tik}
            progress={progress}
            debugProgress={debugProgress}
          />
          <Grid
            color={color(0.7)}
            count={2}
            isReverse={tik}
            progress={progress}
            debugProgress={debugProgress}
          />
        </div>
      </div>
    </>
  );
};

export {Graph};
