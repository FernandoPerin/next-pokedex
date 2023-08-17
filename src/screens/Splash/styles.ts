import styled from 'styled-components';

interface ContainerStyleProps {
  splashId?: number;
  id: number;
}

export const Container = styled.div<ContainerStyleProps>`
  display: ${({ splashId, id }) => (splashId === id ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  max-height: 100%;
  width: 100%;
  max-width: 21.875rem;
  text-align: center;

  .imageSplash {
    padding: 0 0 1.5rem;
  }

  .titleSplash {
    padding: 1rem;
  }

  .buttonSplash {
    margin: 1.875rem 0 1.25rem;
  }
`;

export const IconCarousel = styled.div`
  padding: 1.5rem 0;
  gap: 0.5rem;
  display: flex;

  .active {
    width: 1.75rem;
    height: 0.5625rem;
    border-radius: 0.6875rem;
    background: ${({ theme }) => theme.colors.primary};
  }

  .dot {
    width: 0.5625rem;
    height: 0.5625rem;
    border-radius: 0.6875rem;
    background: ${({ theme }) => theme.colors.gray100};
  }
`;
