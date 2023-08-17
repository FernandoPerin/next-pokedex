import React from 'react';
import * as Styled from './styles';
import { ThemeColorVariants, ThemeTypographyVariants } from '@src/theme/theme';

interface TextProps {
  children: React.ReactNode;
  color?: ThemeColorVariants;
  variant?: ThemeTypographyVariants;
  as?: 'a' | 'p' | 'h1' | 'h2' | 'h3' | string;
  className?: string;
}

export const Text = ({ children, color = 'primary', variant = 'body1', as = 'p', ...props }: TextProps) => {
  return (
    <>
      <Styled.Text as={as} color={color} variant={variant} {...props}>
        {children}
      </Styled.Text>
    </>
  );
};
