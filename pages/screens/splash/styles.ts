import styled from 'styled-components';

export const Splash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.splash};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.0625rem auto 0;
  height: 100vh;
  max-height: 100%;
  width: 100%;
  max-width: 21.875rem;
  text-align: center;

  .arrow {
    width: 100%;

    > a {
      gap: 0.375rem;
    }
  }

  #splash01 {
    margin: 1.6875rem 0 0;
  }

  .image {
    padding: 0 0 1.5rem;
  }

  .title {
    padding: 1rem;
  }

  .button {
    margin: 1.875rem 0 1.25rem;
  }

  .rotate {
    transform: rotate(180deg);
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
