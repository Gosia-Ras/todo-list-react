import {
  StyledNavigation,
  StyledNavigationItem,
  StyledNavLink } from "./styled"

export const Navigation = () => (
  <nav>
    <StyledNavigation>
      <StyledNavigationItem>
        <StyledNavLink exact to="/tasks">
          Tasks
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavLink exact to="/author">
          About me
        </StyledNavLink>
      </StyledNavigationItem>
    </StyledNavigation>
  </nav>
);
