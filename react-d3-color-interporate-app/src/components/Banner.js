import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {motion, useAnimation, transform} from 'framer-motion';
import {useEffect, useMemo, createRef} from 'react';

// https://github.com/d3/d3-scale-chromatic#d3-scale-chromatic
// https://github.com/d3/d3-scale-chromatic#schemeAccent
// console.log(d3.scaleOrdinal(d3.schemeTableau10)(0));

const barsVariant = {
  animate: {transition: {staggerChildren: 0.095, staggerDirection: 1}},
  leave: {transition: {staggerChildren: 0.095, staggerDirection: 1}},
};

const Banner = ({
  title = '1'.repeat(10),
  isAnimate,
  height = 100,
  width = 5,
  cool,
}) => {
  const controls = useAnimation();
  const charCount = [...title].length;
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
      {[...title].map((c, index) => {
        return (
          <div
            key={index}
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column-reverse;
            `}
          >
            <motion.div
              variants={{
                initial: {y: height},
                animate: {
                  y: (height / charCount) * (charCount - index),
                  transition: {ease: 'easeOut'},
                },
                leave: {
                  y: height,
                  transition: {ease: 'easeOut'},
                },
              }}
              className={css`
                position: relative;
                transform-origin: bottom;
                height: ${height}px;
                width: ${width}px;
                background: ${cool(
                  transform([0, charCount - 1], [0, 1])(index)
                )};
              `}
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export {Banner};
