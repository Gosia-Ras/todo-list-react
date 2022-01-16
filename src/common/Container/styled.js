import styled from "styled-components";

export const StyledContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;

  @media (max-width: 767px) {
    height: max-content;
  }
`;
