import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SECCESS } from "../constants/todosContants";

const initialState = {
    todos: [],
    isLoading: false,
    error: null
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_TODOS_SECCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            };
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return state;
    }
} 

export default todosReducer