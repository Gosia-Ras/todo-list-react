import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  height: fit-content;
  grid-gap: 5px;
`;

export const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0 0 0 15px;
  background-color: ${({ theme }) => theme.color.quaternary};
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3px;
  }
`;

export const StyledSectionBody = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.quaternary};
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
`;

export const SectionParagraph = styled.p`
  text-align: end;
`;
