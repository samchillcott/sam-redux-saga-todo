import {call, put, takeLatest} from 'redux-saga/effects';
import { fetchTodos } from '../../api';
import { downloadTodos } from '../actions';

export function* todosSagas(){
    yield takeLatest(downloadTodos, handleDownloadTodos)
}

function* handleDownloadTodos() {
    console.log("handleDownloadTodos worker saga fired");
    const response = yield call(fetchTodos);
    console.log({response});
    yield put(response);
    // return response;
    // yield put(loadTodos(newTodos));
    // yield put(newTodos);
}


// export function* todosSagas(){
//     console.log("todosSagas");
//     yield takeLatest(addTodo, handleAddTodo)
// }

// function* handleAddTodo({payload: todoText}) {
//     console.log("handleAddTodo");
//     const response = yield call(saveTodos, todoText);
//     // console.log({response});
//     const newTodos = response.data;
//     // yield put(loadTodos(newTodos));
// }