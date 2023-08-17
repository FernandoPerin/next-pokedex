import { ThemeColorVariants, ThemeTypographyVariants } from '@src/theme/theme';
import styled, { css } from 'styled-components';

interface TextStyleProps {
  color?: ThemeColorVariants;
  variant?: ThemeTypographyVariants;
}

const variantText = {
  body1: (theme) => css`
    ${theme.typography.variants.body1};
  `,
  heading1: (theme) => css`
    ${theme.typography.variants.heading1};
  `,
  link1: (theme) => css`
    ${theme.typography.variants.link1};
  `,
};

export const Text = styled.p<TextStyleProps>`
  ${({ theme, color, variant }) => css`
    ${variantText[variant](theme)}
    color: ${theme.colors[color]};
  `};
`;
