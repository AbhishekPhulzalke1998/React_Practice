import React, { useState } from 'react'
import './RegistrationForm.css';
import { Button } from '@mui/material';

const RegistrationForm = () => {
    const [formData,setFormData] = useState({
        firstName : '',
        lastName : '',
        email : ''
    });
 
 const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
 }

  return (
    <form>
       
    <div className='container'>
    <h2>Registion Form </h2>
 <div className='form-container'>
        <div className='input-container'>
        <label>First Name :</label>
       <input type='text' name='firstName' value={formData.firstName}  onChange={handleChange} />
       </div> 

       <div className='input-container'>
        <label>Last Name : </label>
       <input type='text' name='lastName' value={formData.lastName}  onChange={handleChange} />
       </div>

       <div className='input-container'>
        <label>Email :</label>
       <input type='text' name='email' value={formData.email}  onChange={handleChange} />
       </div>
       < Button className='btn'>Submit</Button>
       </div>
     
    </div>
    </form>
  )
}

export default RegistrationForm
