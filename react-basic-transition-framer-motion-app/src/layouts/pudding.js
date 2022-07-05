import { AnimatePresence, motion } from 'framer-motion';

const animation = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 120,
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
    y: 120,
  },
};

const Layout = ({ children, show}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
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
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Layout };
