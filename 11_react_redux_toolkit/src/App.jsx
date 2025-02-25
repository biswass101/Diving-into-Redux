import React from 'react'
import CounterView from './features/counter/CounterView'
import CounterView2 from './features/counter_2/CounterView2'

const App = () => {
  return (
    <div className='App'>
      <h1>Counter App</h1>
      <CounterView/>
      <CounterView2/>
    </div>
  )
}

export default App