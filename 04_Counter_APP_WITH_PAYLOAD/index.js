//state - count : 0
//action - increment, dcrement, reset
//reducer
//store

const { createStore } = require("redux")

//Constants
const INCREMENT = 'INCREMENT' 
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'

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

//action with payload
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
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
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
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

// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(resetCounterAction())

//action with payload
store.dispatch(incrementCounterByValue(5))
store.dispatch(incrementCounterByValue(10))
