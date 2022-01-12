import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import { StyledNavigation, StyledNavLink } from "./styled";

export default () => (
  <HashRouter>
    <nav>
      <StyledNavigation>
        <li>
          <StyledNavLink exact to="/tasks">
            Tasks
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink exact to="/author">
            About me
          </StyledNavLink>
        </li>
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
  </HashRouter>
);
