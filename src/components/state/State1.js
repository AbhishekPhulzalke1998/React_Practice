// 1)he State is a built-React object is used to contian data or information
//about the component
// 2) A state can be modified based on user action or network changes 
// 3) Everytime When the state of an object changes React re-render 
//the  component to the browser.
//whatever the varibles and data types are in react those are not directly accessible for that's why we need state.

import React from 'react'

const State1 = () => {

var x = 10;

function updateState()
{
    x=15;
    // console.log(x);
}
console.log(x);


  return (
    <div>
           <h1>State</h1>
          <p>Learning State{x}</p>
          <button onClick={updateState}>Click Me</button>
          <hr></hr>
    </div>
  )
}

export default State1


