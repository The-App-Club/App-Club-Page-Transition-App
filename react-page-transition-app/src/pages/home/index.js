import {css} from '@emotion/css';
import {Link} from 'react-router-dom';
import {Layout} from '../../layout/default';
import {useState, useLayoutEffect} from 'react';
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Layout isLoading={isLoading}>
      <div
        className={css`
          display: grid;
          place-items: center;
          width: 100vw;
          height: 100vh;
        `}
      >
        <Link to={'/about'}>{'About'}</Link>
      </div>
    </Layout>
  );
};

export {HomePage};
