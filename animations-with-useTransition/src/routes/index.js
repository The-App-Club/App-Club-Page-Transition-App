import {Routes, Route, useLocation} from 'react-router-dom';

import styled from '@emotion/styled';
import {useTransition, animated} from 'react-spring';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';

const StyledContainer = styled(animated.div)`
  position: relative;
  min-height: 300vh;
  width: 100%;
  padding: 30px 60px;
`;

const PageTransition = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    // from: {
    //   position: 'absolute',
    //   width: '100%',
    //   transform: 'translate(100%,0)',
    // },
    // enter: {
    //   position: 'absolute',
    //   transform: 'translate(0%,0)'},
    // leave: {
    //   position: 'absolute',
    //   transform: 'translate(-100%,0)',
    // },
    from: {
      position: 'absolute',
      width: '100%',
      transform: 'translate(-100%,0)',
    },
    enter: {
      position: 'absolute',
      transform: 'translate(0%,0)',
    },
    leave: {
      position: 'absolute',
      transform: 'translate(100%,0)',
    },
    // from: {
    //   opacity: 0,
    //   position: 'absolute',
    //   height: '100%',
    //   transform: 'translate(0,-100%)',
    // },
    // enter: {
    //   opacity: 1,
    //   position: 'absolute',
    //   transform: 'translate(0,0%)',
    // },
    // leave: {
    //   opacity: 0,
    //   position: 'absolute',
    //   transform: 'translate(0,100%)',
    // },
    // from: {
    //   opacity: 0,
    //   position: 'absolute',
    //   height: '100%',
    //   transform: 'translate(0,100%)',
    // },
    // enter: {
    //   opacity: 1,
    //   position: 'absolute',
    //   transform: 'translate(0,0%)',
    // },
    // leave: {
    //   opacity: 0,
    //   position: 'absolute',
    //   transform: 'translate(0,-100%)',
    // },
  });
  return transitions((style, item, {phase}) => {
    const {pathname} = item;
    // console.log(style, pathname, phase);
    if (phase === `enter` || pathname === `/`) {
      document.body.classList.remove('is-loading');
    } else {
      document.body.classList.add('is-loading');
    }
    return (
      <StyledContainer style={style}>
        <Routes location={item}>
          <Route path="/" exact element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
        </Routes>
      </StyledContainer>
    );
  });
};

export {PageTransition};
