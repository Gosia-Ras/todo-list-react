import { call, put, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Something went wrong");
  }
}

export function* watchFetchExampleTasks() {
  console.log("Saga connected")
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
