import React from 'react'

const Prop = (props) => {
    console.log(props)


  return (
   <>
     <h3> Employee name is : {props.name}</h3>
     <h3>Employee Surname is : {props.Surname}</h3>
     <h3>cureent_Organization is : {props.cureent_Organization}</h3>
     <h3>Pre_Organization is : {props.Pre_Organization }</h3>
     <h3>First_Oraganization is : {props.First_Oraganization }</h3>
     <hr></hr>
     </>
  )
}

export default Prop
