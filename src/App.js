import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "../src/features/author/AuthorPage";
import TasksPage from "../src/features/tasks/TasksPage/index";
import TaskPage from "../src/features/tasks/TaskPage/index";
import { Navigation } from "./features/navigation";
import Footer from "./common/Footer";

export default () => (
  <>
    <HashRouter>
      <Navigation />
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
    </HashRouter>
    <Footer title="Coded in 2022 by Gosia Ras"/>
  </>
);
