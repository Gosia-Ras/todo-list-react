import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  background-color: white;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid rgb(218, 218, 218);

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: teal;
  }
`;

export const Span = styled.span`
  overflow-wrap: anywhere;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  color: white;
  border: none;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: hsl(120, 100%, 25%);
      transition: background 1s;

      &:hover {
        background-color: hsl(120, 100%, 35%);
        cursor: pointer;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: rgb(210, 5, 15);
      transition: background 1s;

      &:hover {
        background-color: hsl(357, 95%, 50%);
        cursor: pointer;
      }
    `}
`;
