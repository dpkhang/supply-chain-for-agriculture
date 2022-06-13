import { configureStore} from '@reduxjs/toolkit'
import transactionProducer from '../features/transaction/transaction.slice'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    transactionProducer,
  },
  middleware: (getDafaultSagaMiddleware) => getDafaultSagaMiddleware({thunk: false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

