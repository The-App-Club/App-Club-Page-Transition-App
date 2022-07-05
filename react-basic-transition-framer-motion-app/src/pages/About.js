import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { Layout } from '../layouts/default';
import { Pudding } from '../components/Pudding';
const About = () => {
  return (
    <Layout>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <h2>{`AboutPage`}</h2>
        <Link to={'/'}>home</Link>
      </div>

      <Pudding />
    </Layout>
  );
};

export { About };
