// Rules : 1 : Must be Written inside the function component.
//         2 : Must be import in component
//         3 : must be call at top level of component
//         4 : cannot be conditional


import React from 'react'
import { useState } from 'react'

const UseStateHook1 = () => {

     const [count, setcounter] = useState(0);


    function  updatevalue()
    {
      setcounter(count + 1);
    }


  return (

    <div>
        <h1>UseStateHook</h1>
         <h3>button clicked times{count}</h3>
         <button onClick={updatevalue}>Click</button>
         <hr></hr>
    </div>

  )
}

export default UseStateHook1
