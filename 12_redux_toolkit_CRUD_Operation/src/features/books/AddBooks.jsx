import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./bookSlice";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const numOfBooks = useSelector((state) => state.books.books.length)
  const handleSubmit = (e) => {
    e.preventDefault()
    const book = {id: numOfBooks + 1, title, author};
    dispatch(addBook(book))
    navigate('/show-books', { replace: true })
  }
  return (
    <div>
      <h2>Add Books</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            id="title"
            value={title}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            name="author"
            id="author"
            value={author}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
