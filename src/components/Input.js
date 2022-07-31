import React from 'react'

const Input = (props) => {
  return (
    <input
    type='text'
    value={props.text}
    onChange={(e) => {props.handleChange(e, props.prop)}}
    onKeyDown={(e)=>{
      if (props.isOpen !== 'true' && e.key === 'Enter') {
        props.toggleEditable()
      }
      if (e.key === 'Enter' && props.onEnterPress) {
        props.onEnterPress()
      }
    }}
    onBlur={props.toggleEditable}
    placeholder={props.placeholder}
    autoFocus
    >
    </input>
  )
}

export default Input
