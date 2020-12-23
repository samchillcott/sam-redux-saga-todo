import { fork } from 'redux-saga/effects'
import { loadTodosWatcher } from './loadTodosSaga'
import { saveTodosWatcher } from './saveTodosSaga'

export default function* rootSaga() {
  yield fork(loadTodosWatcher)
  yield fork(saveTodosWatcher)
}