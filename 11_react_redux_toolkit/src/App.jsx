import React from 'react'
import CounterView from './features/counter/CounterView'
import CounterView2 from './features/counter_2/CounterView2'
import PostsView from './features/posts/PostsView'

const App = () => {
  return (
    <div className='App'>
      <h1>Counter App</h1>
      <CounterView/>
      <CounterView2/>
      <PostsView/>
    </div>
  )
}

export default App