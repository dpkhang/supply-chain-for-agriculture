import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from '../features/user/user.slice';

const rootReducer = combineReducers({
    UserReducer
})

export default rootReducer;