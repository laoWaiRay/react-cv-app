import React from 'react'
import Button from './Button'

const EducationDisplay = (props) => {
  const id = props.formData.id;

  return (
    <div className='education-display'>
      <div className='row-1'>
        <h3>{props.formData.school}</h3>
        <h3>{props.formData.date}</h3>
      </div>
      <div className='row-2'>
        <h3>{props.formData.qualification}</h3>
        <h3>{props.formData.location}</h3>
      </div>
      <div className='description'>
        {props.formData.description}
      </div>
      {props.showRemove === true ? 
        <Button
          text='Remove'
          className='section-close'
          onClick={() => props.onClick(id)}
        /> :
        ''
      }
    </div>
  )
}

export default EducationDisplay
