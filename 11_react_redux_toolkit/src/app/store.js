import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import counterReducer2 from "../features/counter_2/counter2Slice";

const store = configureStore({
    reducer: {
        counter : counterReducer, //mainly a reducer
        counter2 : counterReducer2
    }
})


export default store