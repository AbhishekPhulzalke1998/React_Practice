import React from 'react'
import Prop2 from './Prop2'

const Prop1  = function ()   {
//const Prop = () => {}  // arrow function 
// function Prop1() {}   // normal funnction decleatation

  return (
    <div>

      <>
        <Prop2
            Name = "Bhagat"
            surname = "Giri"
            Department = "Production"
            Age = "27"
         />
      </>

    </div>
  );
}

export default Prop1
