
import React from 'react';



const Prop2 = ({Name,surname,Department,Age}) => {


   return (
      <div>
         <h3>Employee Name is: {Name}</h3> 
         <h3>Employee Surname is: {surname}</h3>
         <h3>Employee Department is: {Department}</h3>
         <h3>Employee Age is: {Age}</h3>
         <hr></hr>
      </div>
   );
}

export default Prop2;
