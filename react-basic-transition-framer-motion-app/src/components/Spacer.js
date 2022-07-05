import styled from '@emotion/styled';
import { css } from '@emotion/css';

const StyledSpacer = styled.div`
  width: 100%;
  height: 3vh;
`;

const Spacer = ({ height = `3vh` }) => {
  return (
    <StyledSpacer
      className={css`
        height: ${height};
      `}
    ></StyledSpacer>
  );
};

export { Spacer };
