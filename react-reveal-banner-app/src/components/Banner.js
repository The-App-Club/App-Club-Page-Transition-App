import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import gsap from 'gsap';
import {useEffect, useMemo, createRef} from 'react';

const StyledBanner = styled(motion.div)`
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

const Banner = ({title = 'Cowboy Bebop', isAnimate}) => {
  const charsRef = useMemo(() => {
    return [...title].map((imageInfo, index) => {
      return createRef();
    });
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const charDomList = charsRef.map((charRef, _) => {
      return charRef.current;
    });
    if (isAnimate) {
      gsap
        .timeline()
        .from(charDomList, {opacity: 0, y: 120, stagger: 0.1})
        .to(charDomList, {opacity: 1, y: 0, stagger: 0.1});
    } else {
      gsap
        .timeline()
        .from(charDomList, {opacity: 1, y: 0, stagger: 0.1})
        .to(charDomList, {opacity: 0, y: 120, stagger: 0.1});
    }
  }, [isAnimate, charsRef]);

  return (
    <StyledBanner>
      {[...title].map((letter, index) => (
        <StyledBannerLetter key={index} ref={charsRef[index]}>
          {letter}
        </StyledBannerLetter>
      ))}
    </StyledBanner>
  );
};

export {Banner};
