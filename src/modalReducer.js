import { createSlice } from '@reduxjs/toolkit'

const toggleReducer = createSlice({
    name : 'toggleModal' , 
    initialState : {
        value: false
    },
    reducers : {
        toggle : (state) => {
            state.value = !state.value
        }
    }
})

export const { toggle } = toggleReducer.actions


export default toggleReducer.reducer;