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
  fetchExampleTasks,
  fetchExampleTasksError,
  fetchExampleTasksSuccess,
  selectTasks
} from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { nanoid } from "@reduxjs/toolkit";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    const exampleTasksWithNewIds = exampleTasks.map((task) => ({
      ...task,
      id: nanoid(),
    }));
    yield put(fetchExampleTasksSuccess(exampleTasksWithNewIds));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Ooops, looks like we can't load it. Please check your internet connection :)");
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
