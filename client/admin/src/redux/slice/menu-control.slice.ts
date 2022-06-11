import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const MenuControlSlice = createSlice({
    name: 'MenuControl',
    initialState: {
        isShowMenu: false
    },
    reducers: {
        updateShowMenu: (state, action: PayloadAction<boolean>) => {
            state.isShowMenu = action.payload
        }
    }
})