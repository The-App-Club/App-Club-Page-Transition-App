import {motion} from 'framer-motion';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css} from '@emotion/css';

const StyledProductDetail = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const easing = [0.6, -0.05, 0.01, 0.99];

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

const ProductDetail = ({index, title, detials, price, thumbnailUrl}) => {
  return (
    <StyledProductDetail>
      <motion.div
        variants={stagger}
        className={css`
          width: 480px;
          position: relative;
        `}
      >
        <Link href="/products" passHref>
          <motion.div variants={fadeInUp}>
            <a
              className={css`
                cursor: pointer;
                color: #282828;
                text-decoration: none;
                text-align: left;
                position: absolute;
                top: -124px;
                left: 0;
              `}
            >
              Back to products
            </a>
          </motion.div>
        </Link>
        <motion.div variants={fadeInUp}>
          <span
            className={css`
              font-size: 1rem;
              color: #424550;
              font-weight: 500;
              text-align: center;
              width: 100%;
              margin-bottom: 32px;
            `}
          >
            Protein
          </span>
        </motion.div>
        <motion.h1 variants={fadeInUp}>{title}</motion.h1>
        <motion.p
          variants={fadeInUp}
          className={css`
            color: #424550;
            font-weight: 300;
          `}
        >
          {detials}
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className={css`
            margin: 24px 0 48px;
            & span {
              margin-right: 16px;
              color: #424550;
            }
          `}
        >
          <span>Soy Free</span>
          <span>Gluten Free</span>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            .qty {
              display: flex;
              align-items: center;
              .add,
              .minus {
                padding: 6px;
                margin: 8px 16px;
                height: 24px;
                width: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 100px;
              }
              .add {
                border: 1px solid #282828;
                cursor: pointer;
              }
              .minus {
                margin-left: 0;
                background: #dfdfdf;
                color: #787878;
              }
            }
            .price {
              color: #282828;
              font-weight: 700;
              font-size: 1.4rem;
            }
          `}
        >
          <div className="qty">
            <div className="minus">-</div>
            <div className="amount">1</div>
            <div className="add">+</div>
          </div>
          <span className="price">{price}</span>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className={css`
            margin-top: 72px;
            display: flex;
            align-items: center;
            & button {
              cursor: pointer;
              border: none;
              border-radius: 8px;
              height: 48px;
              padding: 0 48px;
              font-size: 0.875rem;
              text-transform: uppercase;
              font-weight: 500;
              letter-spacing: 0.06rem;

              &.add-to-cart {
                background: #2d89fa;
                color: #fff;
                margin-right: 24px;
              }
              &.subscribe {
                background: transparent;
                color: #424550;
              }
            }
          `}
        >
          <button className="add-to-cart"> Add to cart</button>
          <button className="subscribe"> Subscribe</button>
        </motion.div>
      </motion.div>
    </StyledProductDetail>
  );
};

export {ProductDetail};
