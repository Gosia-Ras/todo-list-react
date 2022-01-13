import { Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "../author/AuthorPage"
import TasksPage from "../tasks/TasksPage/index"
import TaskPage from "../tasks/TaskPage/index";
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
    <Switch>
      <Route path="/tasks/:id">
        <TaskPage />
      </Route>
      <Route path="/tasks">
        <TasksPage />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/tasks" />
      </Route>
    </Switch>
  </nav>
);
