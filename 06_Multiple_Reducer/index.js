const { createStore, combineReducers } = require("redux")

//product constant
const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'

//cart constant
const GET_CART_ITEMS = 'GET_CART_ITEMS'
const ADD_CART_ITEMS = 'ADD_CART_ITEMS'

//product states
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2
}

//cart states
const initialCartState = {
    cart: ["sugar"],
    numberOfProducts: 1
}

//product actions
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}


//cart actions
const getCart = () => {
    return {
        type: GET_CART_ITEMS
    }
}

const addCart = (product) => {
    return {
        type: ADD_CART_ITEMS,
        payload: product
    }
}

//Product Reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }   
        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}

//Cart Reducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_CART_ITEMS:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

//store
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProducts())
store.dispatch(addProduct("pne"))

store.dispatch(getCart())
store.dispatch(addCart("pne"))

