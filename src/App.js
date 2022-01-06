import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link exact to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link exact to="/author">About me</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route path="/">
          <Redirect to="/tasks" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
