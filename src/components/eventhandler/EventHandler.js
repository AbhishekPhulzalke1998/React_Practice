import React from 'react'

function EventHandler() {

 function handleclick (){
    alert("You clicked the button");
 }

  return (
    <div>
         <button onClick={handleclick}  >Click Me</button>
         {/* <button onClick={()=> alert('you clicked me!')}> */}
    </div>
  )
}

export default EventHandler
