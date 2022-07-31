import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from './Button'

const SkillsDisplay = (props) => {
  return (
    <div className='skills-display'>
      {props.skills.map((skill) => {
        const id = skill.id;
        return <span 
          className='badge' 
          key={uuidv4()}
        >
          {skill.text}
          <Button 
            className='badge-delete'
            text='X'
            onClick={() => props.onClick(id)}
          >
          </Button>
        </span>
      })}
    </div>
  )
}

export default SkillsDisplay