import React from 'react'

const Display = (props) => {
  return (
    <div className='contact-info-display' onClick={props.toggleEditable}>
      {props.text ? props.text : props.placeholder}
    </div>
  )
}

export default Display
