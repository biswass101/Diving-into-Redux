import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./bookSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedBooksInfo = {id, title, author}
    dispatch(updateBook(updatedBooksInfo));
    navigate('/show-books', {replace: true})
  }
  return (
    <div>
      <h1>Edit Book</h1>
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
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
