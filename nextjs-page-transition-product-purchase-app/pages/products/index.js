import Layout from '../../layouts/default';
import Link from 'next/link';
import {motion} from 'framer-motion';
import data from '../../assets/data.json';

import styled from '@emotion/styled';
import {css} from '@emotion/css';

const StyledProductsPage = styled.div`
  width: 100%;
`;

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {duration: 0.6, ease: easing},
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Products = ({}) => {
  return (
    <Layout>
      <motion.div initial="initial" animate="animate" exit={{opacity: 0}}>
        <StyledProductsPage>
          <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            className={css`
              position: relative;
              width: 350px;
              & h1 {
                font-size: 2rem;
                margin: 8px 0;
              }
            `}
          >
            <h1>Select a protein</h1>
          </motion.div>
          <motion.div
            variants={stagger}
            className={css`
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 100%;
              padding: 0 80px;
            `}
          >
            {data.productInfoList.map((productInfo, index) => (
              <Link
                key={index}
                href={`/products/${productInfo.productId}`}
                passHref
              >
                <motion.div
                  variants={fadeInUp}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className={css`
                    box-sizing: border-box;
                    position: relative;
                    border-radius: 12px;
                    padding: 24px;
                    cursor: pointer;
                    background: #ffffff;
                    width: 425px;
                    height: 425px;
                    margin: 24px;
                  `}
                >
                  <span
                    className={css`
                      font-size: 0.875rem;
                      color: #424550;
                      font-weight: 500;
                      text-align: center;
                      width: 100%;
                      margin-bottom: 32px;
                      display: block;
                    `}
                  >
                    Protein
                  </span>
                  <motion.img
                    initial={{x: 60, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.2}}
                    key={productInfo.thumbnailUrl}
                    src={productInfo.thumbnailUrl}
                    width={250}
                  />
                  <div className="product-info">
                    <h4>{productInfo.title}</h4>
                    <span>{productInfo.price}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </StyledProductsPage>
      </motion.div>
    </Layout>
  );
};

export default Products;
