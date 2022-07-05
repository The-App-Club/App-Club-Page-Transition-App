import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Spacer } from '../components/Spacer';

const StyledLayout = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const animation = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 60,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  leave: {
    opacity: 0,
    x: 0,
    y: 60,
  },
};

const Layout = ({ children }) => {
  return (
    <StyledLayout
      variants={animation}
      initial={'hidden'}
      animate={'enter'}
      exit={'leave'}
      onAnimationStart={() => {
        console.log('[start]');
        document.body.classList.add('is-loading');
      }}
      onAnimationComplete={() => {
        console.log('[end]');
        document.body.classList.remove('is-loading');
      }}
    >
      {[...Array(5)].map((n, index) => {
        return <Spacer key={index} />;
      })}
      {children}
    </StyledLayout>
  );
};

export { Layout };
