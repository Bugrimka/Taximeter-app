import {createSlice} from '@reduxjs/toolkit'

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        data: [],
        loading: false
    },
    reducers: {
        setUserData: (state, action) => (
            {
                ...state,
                data: action.payload,
                loading: false
            }
        ),
        getUserData: (state) => (
            {
                ...state,
                loading: true
            }
        )
    }
})
export const {setUserData, getUserData} = userDataSlice.actions


export default userDataSlice.reducer