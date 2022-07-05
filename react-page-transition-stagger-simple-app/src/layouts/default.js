import {motion, AnimatePresence} from 'framer-motion';
import {Loader} from '../components/Loader';
const Layout = ({children, loading, setLoading}) => {
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        children
      )}
    </AnimatePresence>
  );
};

export {Layout};
