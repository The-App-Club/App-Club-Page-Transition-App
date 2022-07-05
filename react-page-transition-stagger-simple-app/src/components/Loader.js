import {motion} from 'framer-motion';
import {css, cx} from '@emotion/css';
import styled from '@emotion/styled';
import {Image} from './Image';

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {opacity: 0, y: 200},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

const Loader = ({setLoading}) => {
  return (
    <motion.div>
      <motion.div
        variants={container}
        onAnimationComplete={() => {
          setLoading(false);
        }}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ImageBlock
          src={'https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif'}
          variants={item}
          className={css`
            width: 400px;
            left: 16%;
            bottom: 14%;
            @media (max-width: 480px) {
              left: 4%;
              bottom: 28%;
            }
          `}
        />
        <ImageBlock
          src={'https://media.giphy.com/media/xdgisqRDFyO9G/giphy.gif'}
          variants={item}
          className={css`
            width: 300px;
            right: 12%;
            top: 8%;
            @media (max-width: 480px) {
              top: 16%;
              right: 4%;
            }
          `}
        />
        <ImageBlock
          src={'https://media.giphy.com/media/3XUbDJ3rPBK1y/giphy.gif'}
          variants={item}
          className={css`
            max-width: 400px;
            width: 40%;
            right: 20%;
            bottom: 10%;
            @media (max-width: 480px) {
              right: 6%;
              bottom: 32%;
            }
          `}
        />
        <ImageBlock
          src={'https://media.giphy.com/media/nkbdFDbowZvOg/giphy.gif'}
          variants={item}
          className={css`
            width: 280px;
            left: 14%;
            top: 12%;
            @media (max-width: 480px) {
              left: 6%;
              top: 18%;
            }
          `}
        />
      </motion.div>
    </motion.div>
  );
};

const StyledImageBlock = styled(motion.div)`
  position: absolute;
  transform-origin: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageBlock = ({variants, src, className}) => {
  return (
    <StyledImageBlock
      variants={variants}
      className={cx(
        css`
          position: absolute;
          transform-origin: center;
          display: flex;
          align-items: center;
          justify-content: center;
        `,
        className
      )}
      // https://github.com/emotion-js/emotion/issues/472#issuecomment-347144645
    >
      <Image src={src} alt={''} />
    </StyledImageBlock>
  );
};
export {Loader};
