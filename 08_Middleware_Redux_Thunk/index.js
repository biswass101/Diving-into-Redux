// async actions - api calling
// api url - http://jsonplaceholder.typicode.com/todos
// middleware- redux-thunk
// axio api

const { default: axios } = require('axios')
const  { createStore, applyMiddleware } = require('redux')
const thunk = require('redux-thunk').d
//constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"
const API_URL = 'http://jsonplaceholder.typicode.com/todos'

//state
const initialsTodoState = {
    todos : [],
    isLoading: false,
    error : null,
}
//actions
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}

const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}

const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

//reducers

const todosRuducer = (state = initialsTodoState, action) => {
    switch (key) {
        case GET_TODOS_REQUEST:
           return {
                ...state,
                isLoading: true,
           }
        case GET_TODOS_SUCCESS:
           return {
                ...state,
                isLoading: false,
                todos: action.payload
           }
        case GET_TODOS_FAILED:
           return {
                ...state,
                isLoading: false,
                error: action.payload
           }
        default:
           return state
    }
}

//async action creator
const fethcData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL)
         .then(res => {
            console.log(res.data)
         })
         .catch(error =>{
            console.log(error.message)
         })
    }
}

//store
const store = createStore(todosRuducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fethcData())