import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {motion, useAnimation, transform} from 'framer-motion';
import {useEffect, useMemo, createRef} from 'react';
import * as d3 from 'd3';

// https://github.com/d3/d3-scale-chromatic#d3-scale-chromatic
// https://github.com/d3/d3-scale-chromatic#schemeAccent
// console.log(d3.scaleOrdinal(d3.schemeTableau10)(0));

const barsVariant = {
  animate: {transition: {staggerChildren: 0.095, staggerDirection: 1}},
  leave: {transition: {staggerChildren: 0.095, staggerDirection: 1}},
};

const barVariant = {
  initial: {y: 400},
  animate: {
    y: 0,
    transition: {ease: 'easeOut'},
  },
  leave: {
    y: 400,
    // scaleY: [0, 1],
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
        /* background: url(https://media.giphy.com/media/10VjiVoa9rWC4M/giphy.gif);
        background-size: cover; */
        overflow: hidden;
      `}
    >
      {[...Array(10).keys()].map((n, index) => {
        return (
          <motion.div
            key={index}
            variants={{
              initial: {y: 400},
              animate: {
                y: (350 / 10) * (10 - n) - 30,
                transition: {ease: 'easeOut'},
              },
              leave: {
                y: 400,
                // scaleY: [0, 1],
                transition: {ease: 'easeOut'},
              },
            }}
            className={css`
              transform-origin: bottom;
              height: ${350}px;
              width: 50px;
              background: ${d3.interpolateGnBu(
                transform([0, 10 - 1], [0.5, 1])(n)
              )};
            `}
          />
        );
      })}
    </motion.div>
  );
};

export {Banner};
