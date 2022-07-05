import {css} from '@emotion/css';
import {useRef, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {motion, useAnimation, animate, useMotionValue} from 'framer-motion';
import * as R from 'ramda';
import * as d3 from 'd3';

const Nav = () => {
  const boxDomRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const controls = animate(x, 1, {
      duration: 10.75,
      onUpdate: (e) => {
        const progress = R.clamp(0, 1, e);
        boxDomRef.current.style.background = d3.interpolatePuBuGn(progress);
      },
    });
    return () => {
      controls.stop;
    };
  }, []);

  return (
    <div
      ref={boxDomRef}
      className={css`
        width: 3rem;
        height: 3rem;
      `}
    >
      a
    </div>
  );
};

export {Nav};
