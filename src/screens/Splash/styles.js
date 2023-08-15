import styled, { css } from 'styled-components';

export const Text = styled.h1`
  ${({theme}) => css`
    color: ${theme.colors.elements.water}
  `}
`
