// to do sideEffect tasks timer function ,data fetching,set timeout DOM Update
// as the page relaod at that time useEffect hook function gets call 
// useEffect hook accepts two values one is functon and another one is option value 

import React from 'react'
import { useState ,useEffect } from 'react'

const UseEffectHook = () => {

  const [count, setcounter] = useState(0);
  const [data, setdata]= useState("Ram")

  useEffect(() => {
    console.log("Component Mounted")
  },[count])                  // After adding this one optional parameter [] its not to run useeffect hook after clicking on the updatecount.
                             //and we can add the state varaible in that [] so at that particular state updated then useeffect hook will run.

  function  updatecount()
  {
      setcounter(count + 1);
  }

  function updateData()
  {
     setdata("seeta")
  }

  return (
    <div>
        
         <h1>UseEffectHook</h1>
         <h3>button clicked times{count}</h3>
         <button onClick={updatecount}>Click</button>
         <button onClick={updateData}>Update Data</button>
         <hr></hr>
    
    </div>
  )
}

export default UseEffectHook

