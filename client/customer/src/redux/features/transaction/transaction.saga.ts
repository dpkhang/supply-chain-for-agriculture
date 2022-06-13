import { GET_TRANSACTIONS } from './transaction.saga.type';
import { takeEvery, put } from 'redux-saga/effects'
import { TransactionService } from '../../../services/transaction.service'
import { getAll } from './transaction.slice'


const transactionService = new TransactionService()

export function* getTransactionsSaga(): any {
  const transactions = yield transactionService.getAll()
  if(transactions && transactions.status === 200) {
    const data = transactions.data
    yield put(getAll(data))
  }
}

export function* watchTransactionAsync() {
  yield takeEvery(GET_TRANSACTIONS, getTransactionsSaga)
}