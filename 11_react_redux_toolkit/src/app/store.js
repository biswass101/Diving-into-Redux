import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
    reducer: {
        counter : counterReducer //mainly a reducer
    }
})


export default store