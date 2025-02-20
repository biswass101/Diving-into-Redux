const { createStore } = require("redux")

//constants
const ADD_USER = 'ADD_USER' 

//state
const initialState = {
    users : ['Niloy'],
    count : 1,
}

//action with payload
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

//reducer
const userRecucer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
                users : [...state.users, action.payload],
                count : state.count + 1
            }
        default:
            state   
    }
}

//store
const store = createStore(userRecucer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addUser("Rahim"))
store.dispatch(addUser("Kalma"))
