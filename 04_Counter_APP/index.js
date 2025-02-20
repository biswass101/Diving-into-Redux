//state - count : 0
//action - increment, dcrement, reset
//reducer
//store

const { createStore } = require("redux")

//Constants
const INCREMENT = 'INCREMENT' 
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

//state
const initialState = {
    count : 0
}

//action
const incrementCounterAction = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT
    }
}
const resetCounterAction = () => {
    return {
        type: RESET
    }
}

//reducer
const counterRecucer = (state = initialState, action) => {
    switch(action.type) {
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
        case RESET:
            return {
                ...state,
                count: 0
            }
        default:
            state   
    }
}

//store
const store = createStore(counterRecucer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(resetCounterAction())
