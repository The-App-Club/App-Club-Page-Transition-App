import {css} from '@emotion/css';
import {Link} from 'react-router-dom';
import gsap, {Power3, Power4} from 'gsap';
import {useRef, useEffect, useMemo} from 'react';
import styled from '@emotion/styled';
import '@fontsource/kaushan-script';
import {Loading} from '../../layouts/loading';
import {Spacer} from '../../components/Spacer';

const StyledContainer = styled.div`
  position: relative;
  > section {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    min-height: 100vh;
    max-width: 800px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
  }
`;

const AboutPage = () => {
  const screenDomRef = useRef(null);
  const bodyDomRef = useRef(null);

  const tl = useMemo(() => {
    return gsap.timeline();
  }, []);

  useEffect(() => {
    const screenDom = screenDomRef.current;
    const bodyDom = bodyDomRef.current;
    tl.set(bodyDom, {
      y: 60,
      opacity: 0,
      pointerEvents: 'none',
      overflowY: 'hidden',
    })
      .to(screenDom, {
        duration: 1.2,
        height: '100%',
        ease: Power3.easeInOut,
      })
      .to(screenDom, {
        duration: 1,
        top: '100%',
        ease: Power3.easeInOut,
        delay: 0.3,
      })
      .set(screenDom, {left: '-100%'})
      .to(bodyDom, 0.3, {
        y: 0,
        opacity: 1,
        pointerEvents: 'auto',
        overflowY: 'auto',
        ease: Power4.easeOut,
        delay: 0.3,
      });
    return () => {
      tl.to(bodyDom, 1, {
        y: 60,
        opacity: 0,
        pointerEvents: 'none',
        overflowY: 'hidden',
      });
      tl.kill();
    };
  });
  return (
    <>
      <Loading
        className={css`
          position: relative;
          background-color: #e4cb58;
          width: 100%;
          height: 0%;
        `}
        ref={screenDomRef}
      />
      <StyledContainer>
        <section ref={bodyDomRef}>
          <h2>This is About page</h2>
          <Link
            to="/"
            className={css`
              color: #000;
              text-decoration: none;
            `}
          >
            Back to Home
          </Link>
          {[...Array(40)].map((_, index) => {
            return <Spacer key={index} />;
          })}
        </section>
      </StyledContainer>
    </>
  );
};

export {AboutPage};
