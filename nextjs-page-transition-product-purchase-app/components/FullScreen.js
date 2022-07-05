import styled from '@emotion/styled';

const StyledFullScreen = styled.div`
  height: 100vh;
`;

const FullScreen = ({children}) => {
  return <StyledFullScreen>{children}</StyledFullScreen>;
};

export {FullScreen};
