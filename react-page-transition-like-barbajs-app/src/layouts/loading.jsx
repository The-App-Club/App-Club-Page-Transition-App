import {forwardRef} from 'react';
import {css} from '@emotion/css';

const _Loading = ({className = css``}, ref) => {
  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        z-index: 10;
        pointer-events: none;
      `}
    >
      <div className={className} ref={ref}></div>
    </div>
  );
};

const Loading = forwardRef(_Loading);

export {Loading};
