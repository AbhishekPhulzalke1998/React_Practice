// To Directly manipulate the DOM 

import React from 'react'
import { useRef,useState } from 'react'

const UseRefHook = () => {

 const RefElement = useRef("");
 const [name,setName] = useState("yoshita");
 console.log(RefElement);

 function Reset()
 {
    setName("")
    RefElement.current.focus()
   
 }

 function HandleInput()
 {
    RefElement.current.style.color="blue"
    RefElement.current.value="Jainny"
 }

  return (
    <div>
       <h1>UseREf Example</h1>
       <input ref={RefElement} type='text' value={name} onChange={(e)=> setName(e.target.value)}></input>
       <button onClick={Reset}>Reset</button>
       <button onClick={HandleInput}>Handle_input</button>
       <hr></hr>
    </div>
  )
}

export default UseRefHook
