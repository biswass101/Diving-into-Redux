import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import counterReducer2 from "../features/counter_2/counter2Slice";
import postReducer from '../features/posts/postSlice'

const store = configureStore({
    reducer: {
        counter : counterReducer, //mainly a reducer
        counter2 : counterReducer2,
        posts: postReducer
    }
})


export default store