import { Button } from '@mui/material';
import { useState,useRef } from 'react';
import { Layout } from '../layouts/pudding';
import styled from '@emotion/styled';
import { Spacer } from './Spacer';

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
`;

const StyledPudding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.is-animating {
    overflow: hidden;
  }
`;

const Pudding = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    setShow((show) => {
      return !show;
    });
  };

  return (
    <StyledPudding >
      <Button variant={'outlined'} onClick={handleClick}>
        Do
      </Button>
      <Spacer />
      <Layout show={show}>
        <StyledImage
          src={`https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif`}
          alt={''}
        />
      </Layout>
    </StyledPudding>
  );
};

export { Pudding };
