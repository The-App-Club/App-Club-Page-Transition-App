import {useRouter} from 'next/router';
import {Product} from '@/components/Product';

const ProductPage = ({}) => {
  const router = useRouter();
  const {id} = router.query;

  return <Product key={id} index={id}></Product>;
};

export default ProductPage;
