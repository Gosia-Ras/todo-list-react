import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import {
  addExampleTasks,
  fetchExampleTasks,
  fetchExampleTasksError,
  selectTasks,
} from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import getKey from "./keyGenerator";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    const exampleTasksWithNewIds = exampleTasks.map((task) => ({
      ...task,
      id: getKey(),
    }));
    yield put(addExampleTasks(exampleTasksWithNewIds));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Something went wrong");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
