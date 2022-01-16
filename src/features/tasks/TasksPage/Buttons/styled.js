import styled, { css } from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  transition: background 1s;
  border: none;

  &:hover {
    cursor: pointer;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.color.primary};
      transition: color 1s;
      margin: 0 10px 0 0;

      &:hover {
        color: ${({ theme }) => theme.button.primaryHover};
      }

      &:disabled {
        color: ${({ theme }) => theme.button.disabled};
        cursor: not-allowed;
      }
    `}
`;
