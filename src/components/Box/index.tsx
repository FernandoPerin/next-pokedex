import React from 'react';
import * as Styled from './styles';

export const Box = ({ children, styleSheet }) => {
  return (
    <>
      <Styled.Box styleSheet={styleSheet}>{children}</Styled.Box>
    </>
  );
};
