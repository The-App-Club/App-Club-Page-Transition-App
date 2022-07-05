import {css} from '@emotion/css';
import {useMemo, createRef, useEffect, useLayoutEffect} from 'react';

import gsap from 'gsap';

const Grid = ({color, count, isReverse, progress, debugProgress}) => {
  const itemDomRefs = useMemo(() => {
    return [...Array(count).keys()].map((c, index) => {
      return createRef();
    });
  }, [count]);

  const tl = useMemo(() => {
    return gsap.timeline({paused: true});
  }, []);

  useLayoutEffect(() => {
    const itemDomList = itemDomRefs.map((itemRef, index) => {
      return itemRef.current;
    });

    tl.from(itemDomList, {
      x: -window.innerWidth,
      stagger: 0.3,
      ease: 'elastic.out(1, 0.5)',
    }).to(itemDomList, {
      x: 0,
      stagger: 0.3,
      ease: 'elastic.out(1, 0.5)',
    });
  }, []);

  useEffect(() => {
    if (isReverse) {
      tl.reverse();
    } else {
      tl.play();
    }
  }, [isReverse]);

  useEffect(() => {
    tl.seek(progress * tl.duration()).pause();
  }, [progress, tl]);

  useEffect(() => {
    tl.seek((debugProgress / 100) * tl.duration()).pause();
  }, [debugProgress, tl]);

  return (
    <div
      className={css`
        width: 3rem;
      `}
    >
      {[...Array(count).keys()].map((n, index) => {
        return (
          <div
            ref={itemDomRefs[index]}
            key={index}
            className={css`
              padding: 0.5rem;
              background: ${color};
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            {n + 1}
          </div>
        );
      })}
    </div>
  );
};

export {Grid};
