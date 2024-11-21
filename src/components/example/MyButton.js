import React from 'react'
//import MyApp from './MyApp'

function MyButton({count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>
      Clicked {count} times
    </button>
    </div>
  )
}

export default MyButton
