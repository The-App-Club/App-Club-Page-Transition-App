import {useState} from 'react';
import {Button} from '@mui/material';
import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import * as d3 from 'd3';
import {Banner as B} from './components/Banner';
import '@fontsource/kaushan-script';
import './index.scss';
import styled from '@emotion/styled';

const StyledGrid = styled.div`
  .parent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);
    grid-gap: 1rem;
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div3 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .div4 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .div5 {
    grid-area: 5 / 1 / 6 / 2;
  }
`;

const gridArea = ({n}) => {
  return css`
    .parent {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(${n}, 1fr);
      grid-gap: 1rem;
    }
  `;
};

const rowArea = ({n}) => {
  return css`
    .div${n} {
      grid-area: ${n} / 1 / ${n + 1} / 2;
    }
  `;
};

const App = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = (e) => {
    setAnimate((animate) => {
      return !animate;
    });
  };

  const interpolateList = [
    d3.interpolateBrBG,
    d3.interpolatePRGn,
    d3.interpolatePiYG,
    d3.interpolatePuOr,
    d3.interpolateRdBu,
    d3.interpolateRdGy,
    d3.interpolateRdYlBu,
    d3.interpolateRdYlGn,
    d3.interpolateSpectral,
    d3.interpolateBlues,
    d3.interpolateGreens,
    d3.interpolateGreys,
    d3.interpolateOranges,
    d3.interpolatePurples,
    d3.interpolateReds,
    d3.interpolateTurbo,
    d3.interpolateViridis,
    d3.interpolateInferno,
    d3.interpolateMagma,
    d3.interpolatePlasma,
    d3.interpolateCividis,
    d3.interpolateWarm,
    d3.interpolateCool,
    d3.interpolateCubehelixDefault,
    d3.interpolateBuGn,
    d3.interpolateBuPu,
    d3.interpolateGnBu,
    d3.interpolateOrRd,
    d3.interpolatePuBuGn,
    d3.interpolatePuBu,
    d3.interpolatePuRd,
    d3.interpolateRdPu,
    d3.interpolateYlGnBu,
    d3.interpolateYlGn,
    d3.interpolateYlOrBr,
    d3.interpolateYlOrRd,
    d3.interpolateRainbow,
    d3.interpolateSinebow,
  ];

  const classNameList = interpolateList.map((n, index) => {
    return rowArea({n: index + 1});
  });

  return (
    <>
      <Button variant={'outlined'} onClick={handleClick}>
        Do
      </Button>
      <StyledGrid
        className={cx(classNameList, gridArea({n: interpolateList.length}))}
      >
        <div className="parent">
          {[...Array(interpolateList.length).keys()].map((n, index) => {
            return (
              <div
                key={index}
                className={cx(
                  css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  `,
                  `div${index + 1}`
                )}
              >
                <B
                  title={'1'.repeat(30)}
                  isAnimate={animate}
                  cool={interpolateList[index]}
                  height={200}
                  width={40}
                />
              </div>
            );
          })}
        </div>
      </StyledGrid>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
