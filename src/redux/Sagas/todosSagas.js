import {call, put, takeLatest} from 'redux-saga/effects';
import { saveTodos } from '../../api';
import { addTodo } from '../actions';
import { loadTodos } from '../actions/index'

export function* todosSagas(){
    console.log("todosSagas");
    yield takeLatest(addTodo, handleAddTodo)
}

function* handleAddTodo({payload: todoText}) {
    console.log("handleAddTodo");
    const response = yield call(saveTodos, todoText);
    // console.log({response});
    const newTodos = response.data;
    // yield put(loadTodos(newTodos));
}