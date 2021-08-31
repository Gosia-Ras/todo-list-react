import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  grid-template-rows: auto minmax(50px, 1fr);
  grid-gap: 5px;
`;

export const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0 0 0 15px;
  background-color: white;
`;

export const StyledSectionBody = styled.div`
  padding: 20px;
  background-color: white;
`;
