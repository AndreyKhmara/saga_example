
import {combineReducers, createStore, applyMiddleware} from "redux";
import countReducer from "./reducers/counterRdducer";
import userReducer from './reducers/userReducer'
import createSagaMiddleware from 'redux-saga' // создаёт сага мидлвары

import { rootWatcher } from "./sagas";

const sagaMiddleware = createSagaMiddleware() // вызываем сага мидлвары


const rootReducer = combineReducers({
    countReducer,
    userReducer
    
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher) // вызываем и передаём вотчер


