import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { AuthorPage } from "../src/features/AuthorPage/";
import TasksPage from "../src/features/tasks/TasksPage/index";
import TaskPage from "../src/features/tasks/TaskPage/index";
import { Navigation } from "./common/Navigation";
import Footer from "./common/Footer";
import { toAuthor, toTask, toTasks } from "./routes";

export const App = () => (
  <>
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toTask()}>
          <TaskPage />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route path={toAuthor}>
          <AuthorPage />
        </Route>
        <Route>
          <Redirect to={toTasks()} />
        </Route>
      </Switch>
    </HashRouter>
    <Footer title="Coded in 2022 by Gosia Ras" />
  </>
);
