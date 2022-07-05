import styled from '@emotion/styled';
import {motion, useAnimation} from 'framer-motion';
import {useEffect, useMemo, createRef} from 'react';

const StyledBanner = styled(motion.span)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const StyledBannerLetter = styled(motion.span)`
  font-size: 6rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
  leave: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: {y: 120},
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
  leave: {
    y: 120,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner2 = ({title = 'Cowboy Bebop', isAnimate}) => {
  const controls = useAnimation();

  const charsRef = useMemo(() => {
    return [...title].map((imageInfo, index) => {
      return createRef();
    });
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (isAnimate) {
      controls.start('animate');
    } else {
      controls.start('leave');
    }
  }, [isAnimate, controls]);

  return (
    <StyledBanner variants={banner} animate={controls}>
      {[...title].map((letter, index) => {
        return (
          <StyledBannerLetter
            key={index}
            ref={charsRef[index]}
            variants={letterAni}
          >
            {letter}
          </StyledBannerLetter>
        );
      })}
    </StyledBanner>
  );
};

export {Banner2};
