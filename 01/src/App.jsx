import React from 'react'
import Child from './components/Child';

const App = () => {

  const name = "Shreshth";
  const age = 21;
  const hobby = ["Coding", "Cricket", "Music"];
  return (
    <div>
      <h1>Parent Component</h1>

      <Child name={name} age={age} hobby={hobby} />
    </div>
  )
}

export default App