import useSWR from 'swr';
import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';

import styled from '@emotion/styled';
import {FullScreen} from './FullScreen';
import {ProductThumbnail} from './ProductThumbnail';
import {ProductDetail} from './ProductDetail';

const fetcher = (...args) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(...args);
      const json = await response.json();
      resolve(json);
    } catch (error) {
      reject(error);
    }
  });
};

const fetcher2 = (...args) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(...args);
      resolve({thumbnailUrl: response.url});
    } catch (error) {
      reject(error);
    }
  });
};

const StyledProduct = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

let productInfo = {};
const Product = ({index}) => {
  // https://lo-victoria.com/a-look-at-react-hooks-useswr-for-data-fetching-in-react
  const {data: productMain, errorMain} = useSWR(
    `https://jsonplaceholder.typicode.com/photos/${index + 1}`,
    fetcher
  );

  const {data: productSub, errorSub} = useSWR(
    `https://picsum.photos/id/${index * 10}/200/300`,
    fetcher2
  );

  if (errorMain || errorSub) {
    return <div>failed to load</div>;
  }

  if (!productInfo) {
    return <div>loading...</div>;
  }

  if (productMain && productSub) {
    productInfo = Object.assign(productMain, {...productSub});
  }

  return (
    <motion.div initial="initial" animate="animate" exit={{opacity: 0}}>
      <FullScreen>
        <StyledProduct>
          <ProductThumbnail imageURL={productInfo.thumbnailUrl} />
          <ProductDetail
            index={index}
            title={productInfo.title}
            detials={`${productInfo.title}${productInfo.title}`}
            thumbnailUrl={productInfo.thumbnailUrl}
            price={Number(productInfo.id || 0) * 1000}
          ></ProductDetail>
        </StyledProduct>
      </FullScreen>
    </motion.div>
  );
};

export {Product};
