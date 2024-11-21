//UseReducer is a React hook for state mangement.
//Alternative of useState() hook.
//Preferable for complex state management logic.
import React from 'react'
import { useReducer } from 'react'

const initialState=0;
const reducer = (state,action) =>{
    switch(action){
        case "Increment" : return state+1
        case "Decrement" : return state-1
        default : return state
    }
}

function UseReducer() {

const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
           <div>count = {count}</div>
           <button onClick={()=>dispatch("Increment")}>Increment</button>
           <button onClick={()=>dispatch("Decrement")}>Decrement</button>
    </div>
  )
}

export default UseReducer
