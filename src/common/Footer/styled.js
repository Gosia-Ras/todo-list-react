import styled from "styled-components";

export const StyledFooter = styled.footer`
  text-align: center;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 10px;
  font-size: small;
  font-style: italic;
  margin-top: 30px;
  color: ${({ theme }) => theme.color.quaternary};

  @media (max-width: 767px) {
    margin-top: 130px;
   }
`;
