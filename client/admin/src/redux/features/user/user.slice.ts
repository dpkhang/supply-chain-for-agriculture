import { RootState } from './../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserState } from './user.state'


const initialState: UserState = {
    users: [],
    user: {
        id: 0,
        fullName: '',
        dob: ''
    }
}

export const UserSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        getAll: (state: UserState, action: PayloadAction<User[]>) => {
            state.users = action.payload
        },

        getById: (state: UserState, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    }
})

export const { getAll, getById } = UserSlice.actions


export const getUsers = (state: RootState) => state?.UserReducer.users
export const getUser = (state: RootState) => state?.UserReducer.user


export default UserSlice.reducer