import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./user";
import {userDataSlice} from "./userData";

export default configureStore({
    reducer: {
        user: userSlice,
        userData: userDataSlice
    }
})