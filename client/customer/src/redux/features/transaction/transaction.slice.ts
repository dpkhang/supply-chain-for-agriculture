import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TransactionState } from './tracsaction.state'

const initialState: TransactionState = {
  transactions: [],
}

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    getAll: (state: TransactionState, action: PayloadAction<[]>) => {
      state.transactions.push({...action})
    }
  }
})

export const  { getAll } =transactionSlice.actions

export default transactionSlice.reducer