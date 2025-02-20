const {createStore} = require('redux')


//defining constants
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"

//state
const initialCounterState = {
    count: 0
};
const initialUsersState = {
    users: [{ name: "Naeem Biswass Niloy" }]
};

//action -> Object - type, payload
//Increment counter(Action)
const incrementCounter = () => {
    return {
        type: INCREMENT
    };
};

//Decrement counter(Action)
const decrementCounter = () => {
    return {
        type: DECREMENT
    };
};

//add User(Action)
const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: 'Akil' }
    };
};

//create reducer for counter -> (Reudcer is a pure function)
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            state
    }
};

//crate Store

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState())
})

//dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
// 1. state
// 2. dispatch action
// 3. reducer
// 4. store - getState(), dispatch, subscribe()