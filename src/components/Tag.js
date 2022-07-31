import React, { useState, useEffect } from 'react'
import Display from './Display';
import Input from './Input';

const Tag = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEditable = (e) => {
    setIsEdit((prevState) => !prevState);
  }

  // componentDidMount() {
  //   if (props.isOpen === 'true') toggleEditable();
  // }

  useEffect(() => {
    console.log('use effect')
    if (props.isOpen === 'true') toggleEditable();
    //eslint-disable-next-line
  }, [])

  return (
    <div className='tag'>
      {!(isEdit) ? 
      <Display 
        text={props.text} 
        placeholder={props.placeholder}
        toggleEditable={toggleEditable}
      /> : 
      <Input 
        text={props.text} 
        handleChange={props.handleChange} 
        toggleEditable={props.isOpen === 'true' ? undefined : toggleEditable}
        placeholder={props.placeholder}
        prop={props.prop}
        onEnterPress={props.onEnterPress} 
        isOpen={props.isOpen}
      />}
    </div>
  )
}

export default Tag
