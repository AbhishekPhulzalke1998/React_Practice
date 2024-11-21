import React, { useCallback, useState } from 'react'
import Child4 from './Child4';

function Usecallback() {

const[add,setadd] = useState(0);
const[count,setCount] = useState(0);


const Learning = useCallback(() =>{

},[count])

function updateAddition()
{
    setadd(add+1)
}

  return (
    <div>
       <h1>UseCallBack Example</h1>
        <h3>{add}</h3>
        <Child4  Learning={Learning} count={count}/>
        <button onClick={updateAddition}>Addition</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+2)}>Count</button>
      <hr></hr>


    </div>
  )
}

export default Usecallback
