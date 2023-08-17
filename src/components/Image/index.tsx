import React from 'react';
import * as Styled from './styles';

interface ImageProps {
  src: string;
  alt?: string;
  width?: string;
  className?: string;
}

export const Image = ({ src, alt, width, ...props }) => {
  return (
    <>
      <Styled.Image src={src} width={width} alt={alt} {...props} />
    </>
  );
};
