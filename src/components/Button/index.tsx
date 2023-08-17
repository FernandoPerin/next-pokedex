import React from 'react';
import * as Styled from './styles';

interface ButtonProps {
  children: React.ReactNode;
  type?: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, type = 'primary', ...props }: ButtonProps) => {
  return (
    <>
      <Styled.ButtonContainer type={type} {...props}>
        {children}
      </Styled.ButtonContainer>
    </>
  );
};
