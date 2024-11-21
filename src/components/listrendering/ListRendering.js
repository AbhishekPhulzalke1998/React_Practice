import React from 'react'
import Data from './Data'

function ListRendering() {

  const dataList = Data.map(elm =>
     <div key={elm.id}>
      <h2>{"The name is :- "+ elm.name}</h2>
      <p>{"The Profecsession  is :- "+elm.profession}</p>

     </div> 
  )
  return (
    <>
     {dataList}
     </>
  )
}

export default ListRendering


