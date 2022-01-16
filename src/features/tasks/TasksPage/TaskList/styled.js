import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  background-color: ${({ theme }) => theme.color.quarternary};
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.tertiary};

  &:hover {
    color: ${({ theme }) => theme.color.primary};
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
      background-color: ${({ theme }) => theme.button.complete};
      transition: background 1s;

      &:hover {
        background-color: ${({ theme }) => theme.button.hoverGreen};
        cursor: pointer;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.button.remove};
      transition: background 1s;

      &:hover {
        background-color: ${({ theme }) => theme.button.hoverRed};
        cursor: pointer;
      }
    `}
`;
