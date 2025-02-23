const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').thunk;
const { default: axios } = require('axios');

// Constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = 'http://jsonplaceholder.typicode.com/todos';

// State
const initialsTodoState = {
    todos: [],
    isLoading: false,
    error: null,
};

// Actions
const getTodosRequest = () => ({ type: GET_TODOS_REQUEST });
const getTodosSuccess = (todos) => ({ type: GET_TODOS_SUCCESS, payload: todos });
const getTodosFailed = (error) => ({ type: GET_TODOS_FAILED, payload: error });

// Reducer
const todosReducer = (state = initialsTodoState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return { ...state, isLoading: true };
        case GET_TODOS_SUCCESS:
            return { ...state, isLoading: false, todos: action.payload };
        case GET_TODOS_FAILED:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
            .then(res => {
                const todos = res.data
                const titles = todos.map((todo) => todo.title)
                dispatch(getTodosSuccess(titles));
            })
            .catch(error => {
                dispatch(getTodosFailed(error.message));
            });
    };
};

// Store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch action
store.dispatch(fetchData());
