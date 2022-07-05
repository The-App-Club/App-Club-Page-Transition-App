import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {motion, useAnimation} from 'framer-motion';
import {useEffect, useMemo, createRef} from 'react';

const barsVariant = {
  animate: {transition: {staggerChildren: 0.095, staggerDirection: 1}},
  leave: {transition: {staggerChildren: 0.095, staggerDirection: -1}},
};

const barVariant = {
  initial: {scaleY: 1},
  animate: {
    scaleY: [1, 0],
    transition: {ease: 'easeOut'},
  },
  leave: {
    scaleY: [0, 1],
    transition: {ease: 'easeOut'},
  },
};

const Banner = ({title = 'Cowboy Bebop', isAnimate}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isAnimate) {
      controls.start('animate');
    } else {
      controls.start('leave');
    }
  }, [isAnimate, controls]);

  return (
    <motion.div
      variants={barsVariant}
      initial="initial"
      animate={controls}
      className={css`
        display: flex;
        background: url(https://media.giphy.com/media/10VjiVoa9rWC4M/giphy.gif);
        background-size: cover;
      `}
    >
      {[...Array(10).keys()].map((n, index) => {
        return (
          <motion.div
            key={index}
            variants={barVariant}
            className={css`
              transform-origin: bottom;
              height: ${350}px;
              width: 50px;
              background: hsla(${(n + 1) * (360 / 10)}, 100%, 50%, 1);
            `}
          />
        );
      })}
    </motion.div>
  );
};

export {Banner};
