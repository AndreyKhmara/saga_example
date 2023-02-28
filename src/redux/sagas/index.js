import {all} from 'redux-saga/effects'
import counterWatcher from './counterSaga'
import userserWotcher from './userSaga'

export function* rootWatcher (){
    yield all([counterWatcher(), userserWotcher()])
}