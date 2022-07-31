import React, { useState } from 'react'
import Tag from './Tag'

const Contact = (props) => {
  const [state, setState] = useState({
    name: '',
    jobTitle: '',
    address: '',
    city: '',
    country: '',
    phone: '',
    email: '',
  });

  const handleChange = (e, prop) => {
    setState({
      ...state,
      [prop]: e.target.value
    })
  }

  return (
    <div className='contact-info'>
      <div className='contact-info-card'>
        <Tag placeholder='Name' text={state.name} handleChange={handleChange} prop='name'/>
        <Tag placeholder='Job Title' text={state.jobTitle} handleChange={handleChange} prop='jobTitle'/>
      </div>
      <div className='contact-info-details'>
        <Tag placeholder='Address' text={state.address} handleChange={handleChange} prop='address'/>
        <Tag placeholder='City' text={state.city} handleChange={handleChange} prop='city'/>
        <Tag placeholder='Country' text={state.country} handleChange={handleChange} prop='country'/>
        <Tag placeholder='Phone' text={state.phone} handleChange={handleChange} prop='phone'/>
        <Tag placeholder='Email' text={state.email} handleChange={handleChange} prop='email'/>
      </div>
    </div>
  )
}

export default Contact