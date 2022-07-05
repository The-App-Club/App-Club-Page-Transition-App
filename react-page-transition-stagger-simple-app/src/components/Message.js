import {css, cx} from '@emotion/css';
import {motion} from 'framer-motion';

const Message = ({name, animated, text, className, delay}) => {
  // console.log(`[Message] animated`, animated, animated[name]);
  if (!animated[name]) {
    return;
  }
  if (animated[name] === 'start') {
    return;
  }
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 160,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 160,
      }}
      transition={{ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6, delay}}
      className={cx(
        css`
          position: absolute;
          z-index: 1;
        `,
        className
      )}
    >
      {text}
    </motion.p>
  );
};

export {Message};
