import {motion, AnimatePresence} from 'framer-motion';
import styled from '@emotion/styled';
import '@fontsource/kaushan-script';

// origin top left only...
const variants = {
  hidden: {
    opacity: 0.7,
    scale: 0,
    x: 20,
    y: 60,
    background: `transparent`,
    clipPath: `polygon(0 0, 100% 0%, 0 0, 0% 100%)`,
  },
  enter: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    background: `hsl(47, 92%, 90%)`,
    clipPath: `polygon(0 0, 100% 0%, 100% 100%, 0% 100%)`,
  },
  exit: {
    opacity: 0.7,
    scale: 0,
    x: 20,
    y: 60,
    background: `transparent`,
    clipPath: `polygon(0 0, 100% 0%, 0 0, 0% 100%)`,
  },
};

// https://www.framer.com/docs/transition/
const titleVariants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      delayChildren: 0.2,
      // staggerDirection: 1,
      // staggerDirection: -1,
      type: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
  },
};
const itemStaggerVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 60,
    rotate: -60,
  },

  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
  },

  exit: {
    opacity: 0,
    scale: 0,
    y: 60,
    rotate: -60,
  },
};
const Title = styled(motion.div)`
  z-index: 1;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -0%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: hsl(47, 69%, 63%);
  & div {
    display: flex;
    flex-direction: row;
  }
  & h1 {
    font-family: 'Kaushan Script';
    font-size: 6rem;
    text-shadow: 15px 15px 3px rgba(32, 32, 32, 0.8);
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }

  & p {
    color: initial;
    font-family: 'Kaushan Script';
    font-size: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const Layout = ({children, isLoading}) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{duration: 0.6, type: 'easeInOut'}}
      style={{position: 'relative'}}
    >
      <AnimatePresence>
        {isLoading && (
          <Title
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={titleVariants}
          >
            <div>
              {'CowboyBebop'.split('').map((char, index) => {
                return (
                  <motion.h1 key={index} variants={itemStaggerVariants}>
                    {char}
                  </motion.h1>
                );
              })}
            </div>
            <div style={{height: `3vh`}}></div>
            <p>loading...</p>
          </Title>
        )}
      </AnimatePresence>
      {children}
    </motion.div>
  );
};

export {Layout};
