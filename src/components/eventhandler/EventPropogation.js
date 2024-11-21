import React from 'react'

function EventPropogation() {
  return (
    <div onClick={()=> {
     alert('you clicked the toolbar')
    }}>
       
       <button onClick={() => alert('playing')} >
         play Movie
       </button>

       <button onClick={() => alert('Uploading')} >
         Upload the image
       </button>
     </div>
  )
}

export default EventPropogation