import React from 'react';

function Prop6( props ) { 

  return (
    <div>
      <h3>Employee Name: {props.Name}</h3>
      <h3>Employee Surname: {props.SurName}</h3>
      <h3>Employee Age: {props.Age}</h3>
      <h3>Employee Department: {props.department}</h3>
      <hr />
    </div>
  );
}

export default Prop6;
