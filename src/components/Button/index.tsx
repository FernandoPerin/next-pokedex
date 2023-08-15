import React from 'react';
import * as Styled from './styles';

interface ButtonProps {
  children: React.ReactNode;
  type?: string;
}

export const Button = ({ children, type = 'primary' }: ButtonProps) => {
  return (
    <>
      <Styled.ButtonContainer type={type}>{children}</Styled.ButtonContainer>
    </>
  );
};
