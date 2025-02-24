import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SECCESS } from "../constants/todosContants";

export const geAllTodos = () => {
    return async (dispatch) => {
        dispatch({ type: GET_TODOS_REQUEST })
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            dispatch({type: GET_TODOS_SECCESS, payload: res.data})
        } catch (error) {
            dispatch({type: GET_TODOS_FAILED, payload: error.message})
        }
    }
}