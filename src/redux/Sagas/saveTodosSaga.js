import {call, takeLatest} from 'redux-saga/effects';
import { sendData } from '../../api';
import { saveTodos } from '../actions/index';

export function* saveTodosWatcher(){
    yield takeLatest(saveTodos, saveTodosFlow)
}

function* saveTodosFlow(action) {
    yield call(sendData, action.payload)
}