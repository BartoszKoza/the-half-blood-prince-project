import styled from "styled-components";

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
  }
`;
