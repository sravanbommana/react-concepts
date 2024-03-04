import React from 'react'
import { useState } from 'react';
import BasicForm from './BasicForm';


const UseStateExample = () => {
 
  const[formState, setFormState] = useState({
    email: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    pincode: ''
  });
  const[userData, setUserData] = useState([]);

  const changeHandler = (event, fieldName) => {
    setFormState({
      ...formState,
      [fieldName]: event.target.value
    });
  }

  const resetData = () => {
    setFormState({
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      pincode: ''
    })
  }

  const submitHandler = () => {
    setUserData([...userData, formState])
    console.log([...userData, formState])
  }
  return (
    <div>
      <BasicForm formState={formState} changeHandler={changeHandler} submitHandler={submitHandler} resetData={resetData} />
    </div>
  )
}

export default UseStateExample
