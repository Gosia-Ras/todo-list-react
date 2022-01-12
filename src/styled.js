import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: larger;

  &.active {
    font-weight: bold;
  }
`;

export const StyledNavigation = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  background-color: teal;
  padding: 15px;
  margin-top: 0;
`;
