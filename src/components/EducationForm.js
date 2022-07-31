import React from 'react'
import Tag from './Tag'
import TextField from './TextField'
import Button from './Button'

const EducationForm = (props) => {
  const saveForm = (e) => {
    props.save();
    props.clickHandler();
  }

  return (
    <div className='education-form'>
      <div className='row-1'>
        <Tag placeholder='School name' prop='school' text={props.formData.school} handleChange={props.handleChange}/>
        <Tag placeholder='Date attended' prop='date' text={props.formData.date} handleChange={props.handleChange}/>
      </div>
      <div className='row-2'>
        <Tag placeholder='Qualification' prop='qualification' text={props.formData.qualification} handleChange={props.handleChange}/>
        <Tag placeholder='Location' prop='location' text={props.formData.location} handleChange={props.handleChange}/>
      </div>
      <div className='description'>
        <TextField 
          className='textfield' 
          placeholder='Say something about it...' 
          prop='description' text={props.formData.description} 
          handleChange={props.handleChange}
          onEnterKey={saveForm}
        />
      </div>
      <div className='buttons'>
        <Button text='Save' onClick={saveForm}/>
        <Button text='Cancel' onClick={props.clickHandler}/>
      </div>
    </div>
  )
}

export default EducationForm