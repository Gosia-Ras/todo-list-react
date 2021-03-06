import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.quaternary};
  font-size: larger;

  &.active {
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledNavigation = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primary};
  padding: 15px;
  margin-top: 0;
`;

export const StyledNavigationItem = styled.li`
  margin: 10px;
`;
