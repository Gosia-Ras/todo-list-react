import styled from "styled-components";

export const StyledContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  min-height: 100vh;
  border: 1px solid ${({ theme }) => theme.color.secondary};

  @media (max-width: 767px) {
    height: max-content;
  }
`;
