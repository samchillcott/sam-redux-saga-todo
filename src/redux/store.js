import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
// import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/Sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

sagaMiddleware.run(rootSaga);

export default store;