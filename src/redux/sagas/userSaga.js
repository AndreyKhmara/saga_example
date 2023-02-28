import {put, takeEvery, call} from 'redux-saga/effects' // call - возвращает данные, которые приходят в промисе;
import { setUsers } from '../reducers/userReducer'
import { FETCH_USERS } from '../reducers/userReducer'


const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')


function* fetchUsersWorker (){
    const data = yield call(fetchUsersFromApi)
    const json = yield call(()=> new Promise (res => res(data.json()) ))
    yield put(setUsers(json))
}


export default function* userserWotcher (){
    yield(takeEvery(FETCH_USERS, fetchUsersWorker))
}