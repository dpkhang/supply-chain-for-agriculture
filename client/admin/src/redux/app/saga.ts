import { all }  from 'redux-saga/effects'
import { watchUsersAsync } from '../features/user/user.saga'
export function* rootSaga() {
    yield all([
        watchUsersAsync(),
    ])
}