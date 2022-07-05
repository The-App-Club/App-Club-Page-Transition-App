import {motion} from 'framer-motion';
import {css} from '@emotion/css';

const ProductThumbnail = ({imageURL}) => {
  return (
    <motion.div
      className={css`
        cursor: pointer;
        width: 500px;
      `}
      animate={{opacity: 1}}
      initial={{opacity: 0}}
    >
      <motion.img
        key={imageURL}
        src={imageURL}
        animate={{x: 0, opacity: 1}}
        initial={{x: 200, opacity: 0}}
        exit={{opacity: 0}}
        transition={{delay: 0.2}}
      />
    </motion.div>
  );
};

export {ProductThumbnail};
