import {call, takeLatest} from 'redux-saga/effects';
import { getTodos } from '../../api';
import { loadTodos } from '../actions/index';

export function* loadTodosWatcher(){
    yield takeLatest(loadTodos, loadTodosFlow)
}

function* loadTodosFlow() {
    const todos = yield call(getTodos)
}