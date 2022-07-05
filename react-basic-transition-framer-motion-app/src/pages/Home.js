import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { Layout } from '../layouts/default';
import { Pudding } from '../components/Pudding';
const Home = () => {
  return (
    <Layout>
      <div className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      `}>
        <h2>{`HomePage`}</h2>
        <Link to={'/about'}>about</Link>
      </div>
      <Pudding />
    </Layout>
  );
};

export { Home };
