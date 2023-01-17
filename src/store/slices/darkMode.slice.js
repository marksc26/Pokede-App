import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name:"darkMode",
    initialState: JSON.parse(localStorage.getItem("darkMode")) || false,
    reducers:{
        setdarkModeGlobal: (state, action) => action.payload
    }

})

export const {setdarkModeGlobal} = darkModeSlice.actions
export default darkModeSlice.reducer