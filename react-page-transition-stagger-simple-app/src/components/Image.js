import styled from '@emotion/styled';

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
`;

const Image = ({src, alt}) => {
  return <StyledImage src={src} alt={alt} />;
};

export {Image};
