import styled, { css } from 'styled-components';
import { StyleSheet } from '../props';

interface BoxStyleProps {
  styleSheet: StyleSheet;
}

export const Box = styled.div<BoxStyleProps>`
  ${({ styleSheet }) => styleSheet};
  ${({ theme, styleSheet }) => css`
    ...styleSheet
 `}
`;
