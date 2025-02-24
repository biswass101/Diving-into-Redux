import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { geAllTodos } from '../services/actions/todosActions'

const Todos = () => {
    const {isLoading, todos, error} = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(geAllTodos())
    }, []) 

  return (
    <div>
        <h2>Todos App</h2>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>{error.message}</h3>}
        <section>
            {todos && todos.map((todo, idx) => {
                return <article key={idx}>
                    <h4>{todo.id}</h4>
                    <h4>{todo.title}</h4>
                </article>
            })}
        </section>
    </div>
  )
}

export default Todos