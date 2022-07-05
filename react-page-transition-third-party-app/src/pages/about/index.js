import {css} from '@emotion/css';
import {Link} from 'react-router-dom';

const AboutPage = ({choicedPreset}) => {
  return (
    <div
      className={css`
        display: grid;
        place-items: center;
        width: 100vw;
        height: 100vh;
        background: rgb(235, 154, 73);
        background: linear-gradient(
          135deg,
          rgba(235, 154, 73, 1) 0%,
          rgba(235, 195, 15, 1) 92%
        );
        font-family: 'Kaushan Script';
        font-size: 3rem;
      `}
    >
      <Link
        to={'/'}
        className={css`
          color: white;
          text-decoration: none;
        `}
      >
        {'Home'}
      </Link>
      <p>{choicedPreset}</p>
    </div>
  );
};

export {AboutPage};
