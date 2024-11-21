import React, { useMemo, useState } from 'react'

function UseMemo1() {

var [add, setadd] = useState(0);
var [minus, setmin] = useState(100);

 function Additon()
 {
    setadd(add+1)
 }


 function Subtraction()
 {
    setmin(minus-1)
 }
  

 const multiplication= useMemo(function multiply(){
    console.log("*****************************")
    return add*10;
 },[add])

  return (
    <div>
        <h1>UseMemo HooK example</h1>
        {multiplication}<br></br>
        <button onClick={Additon}  >Addition</button>
        <span>{add}</span><br></br>
        <button onClick={Subtraction}  >Subtraction</button>
        <span>{minus}</span><br></br>
        <hr></hr>
        <br></br>
    </div>
  )
}

export default UseMemo1
