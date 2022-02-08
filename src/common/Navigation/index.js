import { toAuthor, toTasks } from "../../routes";
import {
  StyledNavigation,
  StyledNavigationItem,
  StyledNavLink,
} from "./styled";

export const Navigation = () => (
  <nav>
    <StyledNavigation>
      <StyledNavigationItem>
        <StyledNavLink exact to={toTasks()}>
          Tasks
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavLink exact to={toAuthor()}>
          About me
        </StyledNavLink>
      </StyledNavigationItem>
    </StyledNavigation>
  </nav>
);
