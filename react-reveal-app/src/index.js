import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {css} from '@emotion/css';
import {Button} from '@mui/material';
import styled from '@emotion/styled';
import gsap from 'gsap';

import {Card} from './components/Card';
// import {CardNG as Card} from './components/CardNG';

import './index.scss';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 1fr);

  gap: 1rem;

  & > .div1 {
    grid-area: 1 / 1 / 3 / 3;
  }
  & > .div2 {
    grid-area: 1 / 4 / 2 / 5;
  }
  & > .div3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  & > .div4 {
    grid-area: 2 / 3 / 3 / 6;
  }
  & > .div5 {
    grid-area: 1 / 5 / 2 / 9;
  }
  & > .div6 {
    grid-area: 2 / 6 / 4 / 7;
  }
  & > .div7 {
    grid-area: 5 / 1 / 6 / 4;
  }
  & > .div8 {
    grid-area: 3 / 1 / 5 / 3;
  }
  & > .div9 {
    grid-area: 3 / 3 / 5 / 6;
  }
  & > .div10 {
    grid-area: 4 / 6 / 6 / 7;
  }
  & > .div11 {
    grid-area: 5 / 5 / 6 / 6;
  }
  & > .div12 {
    grid-area: 5 / 4 / 6 / 5;
  }
  & > .div13 {
    grid-area: 2 / 7 / 5 / 10;
  }
  & > .div14 {
    grid-area: 1 / 9 / 2 / 13;
  }
  & > .div15 {
    grid-area: 2 / 10 / 5 / 12;
  }
  & > .div16 {
    grid-area: 5 / 7 / 6 / 10;
  }
  & > .div17 {
    grid-area: 5 / 10 / 6 / 13;
  }
  & > .div18 {
    grid-area: 2 / 12 / 5 / 13;
  }
`;

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const imageList = [
  `https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif`,
  `https://media.giphy.com/media/b21HcSrrBu8pi/giphy.gif`,
  `https://media.giphy.com/media/xdgisqRDFyO9G/giphy.gif`,
  `https://media.giphy.com/media/b1dXky39p5Zcs/giphy.gif`,
  `https://media.giphy.com/media/3TACspcXhhQPK/giphy.gif`,
  `https://media.giphy.com/media/10VjiVoa9rWC4M/giphy.gif`,
  `https://media.giphy.com/media/vRKJTZ1w731kc/giphy.gif`,
  `https://media.giphy.com/media/zy89dUFZCagFy/giphy.gif`,
  `https://media.giphy.com/media/8hXlcywWOFiJW/giphy.gif`,
  `https://media.giphy.com/media/3XUbDJ3rPBK1y/giphy.gif`,
  `https://media.giphy.com/media/YYbu11qRuJAeQ/giphy.gif`,
];

const App = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => {
      return !show;
    });
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClick} className={css``}>
        Do
      </Button>
      <StyledApp>
        <StyledContainer>
          <StyledGrid>
            {[...Array(18).keys()].map((n, index) => {
              return (
                <Card
                  key={index}
                  n={n + 1}
                  src={gsap.utils.wrap(imageList, index)}
                  delay={80 * index}
                  duration={600}
                  hide={show}
                  cardWidth={`${window.innerWidth / 18 + 10}px`}
                  cardHeight={`${window.innerHeight / 18 + 10}px`}
                />
              );
            })}
          </StyledGrid>
        </StyledContainer>
      </StyledApp>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
