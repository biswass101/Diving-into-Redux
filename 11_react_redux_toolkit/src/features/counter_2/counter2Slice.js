import { createSlice } from "@reduxjs/toolkit";

export const counterSlice2 = createSlice({
    name: "Counter2",
    initialState: {count: 0},
    reducers: {
        barao: (state) => {
            state.count += 1;
        },
        komao: (state) => {
            state.count -= 1;
        },
        sunnoKor: (state) => {
            state.count = 0
        },
        baraoDosKore: (state, action) => {
            state.count += action.payload
        }
    }
})

export const {barao, komao, sunnoKor, baraoDosKore} = counterSlice2.actions
export default counterSlice2.reducer