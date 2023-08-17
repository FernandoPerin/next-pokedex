import styled from 'styled-components';

interface ImageProps {
  width?: string;
  src: string;
  alt?: string;
}

export const Image = styled.img<ImageProps>`
  width: 100%;
  max-width: ${({ width }) => `${width}rem`};
`;
