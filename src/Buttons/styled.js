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
      color: hsl(180, 100%, 25%);
      transition: color 1s;
      margin: 0 10px 0 0;

      &:hover {
        color: hsl(180, 100%, 30%);
      }

      &:disabled {
        color: grey;
        cursor: not-allowed;
      }
    `}
`;
