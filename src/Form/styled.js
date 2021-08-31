import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: teal;
  color: rgb(230, 230, 230);
  padding: 10px;
  transition: background 1s, transform 1s;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
  }
`;
