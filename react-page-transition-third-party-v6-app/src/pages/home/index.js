import {css} from '@emotion/css';
import {Link} from 'react-router-dom';
import '@fontsource/kaushan-script';
const HomePage = ({choicedPreset}) => {
  return (
    <div
      className={css`
        display: grid;
        place-items: center;
        width: 100vw;
        height: 100vh;
        background: rgb(93, 129, 7);
        background: linear-gradient(
          135deg,
          rgba(93, 129, 7, 1) 0%,
          rgba(58, 190, 76, 1) 92%
        );
        font-family: 'Kaushan Script';
        font-size: 3rem;
      `}
    >
      <Link
        to={'/about'}
        className={css`
          color: white;
          text-decoration: none;
        `}
      >
        {'About'}
      </Link>
      <p>{choicedPreset}</p>
    </div>
  );
};

export {HomePage};
