import React from 'react'
import Tag from './Tag'
import TextField from './TextField'
import Button from './Button'

const WorkExperienceForm = (props) => {
  const saveForm = (e) => {
    props.save();
    props.clickHandler();
  }

  return (
    <div className='work-experience-form'>
      <div className='row-1'>
        <Tag placeholder='Company name' prop='company' text={props.formData.company} handleChange={props.handleChange}/>
        <Tag placeholder='Date worked' prop='date' text={props.formData.date} handleChange={props.handleChange}/>
      </div>
      <div className='row-2'>
        <Tag placeholder='Job Title' prop='jobTitle' text={props.formData.jobTitle} handleChange={props.handleChange}/>
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

export default WorkExperienceForm
