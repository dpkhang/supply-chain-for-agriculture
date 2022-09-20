import { takeEvery, put, takeLatest } from 'redux-saga/effects'
import userService from '../../../services/apis/user.service'
import { GET_USER, GET_USERS } from './user.saga.type'
import { getAll, getById } from './user.slice'

function* getUsersSaga(): any {
    const users = yield userService.getAll()
    if(users && users.status === 200) {
        const result = users.results
        yield  put(getAll(result))
    }
}

function* getUserByIdSaga(action: any): any {
    const users = yield userService.getById(action.id)
    if(users && users.status === 200) {
        const result = users.results
        yield  put(getById(result))
    }
}

export function* watchUsersAsync() {
    yield takeLatest(GET_USERS, getUsersSaga)
    yield takeEvery(GET_USER, getUserByIdSaga)
} 