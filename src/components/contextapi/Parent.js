// Here in Context API concept we directly pass the data from the parent component to last child component.
// We have to use the Create,Provider,consumer

import React, { createContext } from 'react'
import Child1 from './Child1';


const data = createContext();
const data1 = createContext();


function Parent() {
   const  varible = "Suresh";
   const variable1 = "Ramesh";
  return (
    <div>
         <data.Provider value={varible}>
            <data1.Provider value={variable1}>
            <Child1 />
            </data1.Provider>
         </data.Provider>
    </div>
  )
}

export default Parent
export {data,data1};
