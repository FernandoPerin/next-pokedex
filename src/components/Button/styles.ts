import theme from '@src/theme/theme';
import styled from 'styled-components';

interface ButtonContainerProps {
  type?: string;
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  width: 20.625rem;
  padding: 0.9375rem;
  border-radius: 3.125rem;
  text-align: center;
  color: ${theme.colors.white};
  background: ${({ type }) => theme.colors.elements[type]};
  font-size: 1.125rem;
  font-weight: 600;
`;

// export const ButtonContainer = styled.div`
//   ${({ theme, type }) => css`
//     ${console.log('Teste', type)}
//     width: 350px;
//     padding: 15px;
//     border-radius: 50px;
//     text-align: center;
//     color: ${theme.colors.white};
//     background: ${theme.colors.primary};
//     font-size: 18px;
//     font-weight: 600;
//   `}
// `;
