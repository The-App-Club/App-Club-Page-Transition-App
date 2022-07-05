import {css} from '@emotion/css';

const Spacer = ({height = `3rem`}) => {
  return (
    <div
      className={css`
        width: 100%;
        max-width: 100%;
        min-height: ${height};
      `}
    ></div>
  );
};

export {Spacer};
