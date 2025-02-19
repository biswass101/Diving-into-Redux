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
        payload: {name: 'Akil'}
    };
}

// 1. state
// 2. dispatch action
// 3. reducer