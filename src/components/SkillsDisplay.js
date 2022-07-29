import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from './Button'

export default class SkillsDisplay extends Component {
  render() {
    return (
      <div className='skills-display'>
        {this.props.skills.map((skill) => {
          const id = skill.id;
          return <span 
            className='badge' 
            key={uuidv4()}
          >
            {skill.text}
            <Button 
              className='badge-delete'
              text='X'
              onClick={() => this.props.onClick(id)}
            >
            </Button>
          </span>
        })}
      </div>
    )
  }
}
