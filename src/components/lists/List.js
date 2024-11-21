import React from 'react'

function List() {
    const Arr1 = ["Mumbai","Delhi","Chenni","kolkata","bangorle","Hyderbad","Pune","Ahemdabad"]
    let result = Arr1.map(city => <li>Arr1</li>)
  return (
    <div>
      <ul>{Arr1}</ul>
    </div>
  )
}

export default List
