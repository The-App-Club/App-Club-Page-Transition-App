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

const Banner = ({title = '空腹は最高の調味料ってやつさ', isAnimate, height = 140, width = 50}) => {
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
        padding-top: ${height}px;
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
                  y: (height / charCount) * (charCount - index) - 10,
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
                background: ${d3.interpolateSpectral(
                  transform([0, charCount - 1], [0, 1])(index)
                )};
              `}
            />
            <motion.div
              variants={{
                initial: {y: height*2},
                animate: {
                  y: (height / charCount) * (charCount - index) + height - 92,
                  transition: {ease: 'easeOut'},
                },
                leave: {
                  y: height*2,
                  transition: {ease: 'easeOut'},
                },
              }}
              className={css`
                font-size: 3rem;
                position: relative;
                transform-origin: bottom;
                height: ${height}px;
                width: ${width}px;
              `}
            >
              {c}
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

export {Banner};
