import React from 'react'

const Child = ({ name, age, hobby }) => {
  return (
    <div>
      <h2>Child Component</h2>

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <p>Hobbies:</p>
      <ul>
        {hobby.map((h, index) => (
          <li key={index}>{h}</li>
        ))}
      </ul>
    </div>
  )
}

export default Child