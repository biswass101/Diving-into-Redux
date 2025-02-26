import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        {id: 1, title: "Love Green Land", author: "Naeem Biswass"},
        {id: 2, title: "Lorem 1000", author: "Rakesh Khanna"}
    ]
}

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const {id, title, author} = action.payload
            const isBookExists = state.books.filter(book => book.id === id)
            if(isBookExists.length > 0) {
                isBookExists[0].title = title;
                isBookExists[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload
            state.books = state.books.filter(book => book.id != id)
        }
    }
})


export const {showBooks, addBook, deleteBook, updateBook} = booksSlice.actions;
export default booksSlice.reducer;