import React from 'react'

const TextField = (props) => {
  return (
    <textarea 
      rows='5' 
      cols='30' 
      placeholder={props.placeholder} 
      value={props.text} 
      onChange={(e) => {props.handleChange(e, props.prop)}}
      className={props.className}
      onKeyDown={(e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
          props.onEnterKey();
        }
      }}
    >
    </textarea>
  )
}

export default TextField
