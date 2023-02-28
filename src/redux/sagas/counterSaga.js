import {put, takeEvery} from 'redux-saga/effects' // put - это dispatch для синхронных экшенов;
import { ASYNC_INCREMENT, ASYNC_DECREMENT, decrementCreator, incrementCreator } from '../reducers/counterRdducer'


const delay = (ms) => new Promise( res => setTimeout(res, ms)) //функция возвращает промис с задержкой


function* incrementWorker(){ //воркер
    yield delay(1000)//задержка
    yield put(incrementCreator())// put - это 'dispatch' для синхронных экшенов

}

function* decrementWorker(){
    yield delay(1000)
    yield put(decrementCreator()) 
    
}



export default function* counterWatcher(){ // вотчер
    yield(takeEvery(ASYNC_INCREMENT, incrementWorker)) //takeEvery - это вспомогательная функция, которая предоставляется redux-saga для прослушивания отправленных ASYNC_INCREMENT действий и запуска incrementAsync при каждой отправке.
    yield(takeEvery(ASYNC_DECREMENT, decrementWorker))
}