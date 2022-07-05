import {css} from '@emotion/css';
import {motion} from 'framer-motion';

const TransitionImage = ({src, alt, notifier, name}) => {
  return (
    <div
      className={css`
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
      `}
    >
      <motion.img
        initial={{
          opacity: 0,
          transform: 'scale(0)',
        }}
        animate={{
          opacity: 1,
          transform: 'scale(1)',
        }}
        exit={{
          opacity: 0,
        }}
        transition={{ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6}}
        onAnimationStart={() => {
          notifier({status: `start`, name});
        }}
        onAnimationComplete={() => {
          notifier({status: `end`, name});
        }}
        src={src}
        alt={alt}
        className={css`
          width: 100%;
          max-width: 100%;
          min-height: 100vh;
          display: block;
          object-fit: cover;
        `}
      />
    </div>
  );
};

export {TransitionImage};
