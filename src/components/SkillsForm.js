import React from 'react'
import Tag from './Tag'
import Button from './Button';

const SkillsForm = (props) => {
  const saveForm = (e) => {
    props.save();
    props.clickHandler();
}

  return (
    <div className='skills-form'>
      <h3>What are you good at?</h3>
      <Tag 
        placeholder='Enter a skill...'
        text={props.skill.text}
        prop='text'
        handleChange={props.handleChange}
        isOpen='true'
        onEnterPress={saveForm}
      />
      <div className='buttons'>
        <Button text='Save' onClick={saveForm}/>
        <Button text='Cancel' onClick={props.clickHandler}/>
      </div>
    </div>
  )
}

export default SkillsForm
