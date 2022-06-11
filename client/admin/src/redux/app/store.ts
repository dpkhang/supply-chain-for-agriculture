import { configureStore } from '@reduxjs/toolkit'
import { MenuControlSlice } from '../slice/menu-control.slice'

export const store = configureStore({
  reducer: {
    menuControl: MenuControlSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch