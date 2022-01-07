import {
  HashRouter,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link exact to="/tasks">
            Tasks
          </Link>
        </li>
        <li>
          <Link exact to="/author">
            About me
          </Link>
        </li>
      </ul>
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
