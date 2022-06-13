import { all }  from 'redux-saga/effects'
import { watchTransactionAsync } from '../features/transaction/transaction.saga'

export function* rootSaga() {
    yield all([
      watchTransactionAsync(),
    ])
}