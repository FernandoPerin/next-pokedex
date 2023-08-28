import React from 'react';
import * as Styled from './styles';

interface ImageProps {
  src: string;
  alt?: string;
  // width?: string;
  className?: string;
}

export const Image = ({ src, alt, ...props }) => {
  return (
    <>
      <Styled.Image src={src} alt={alt} {...props} />
    </>
  );
};
