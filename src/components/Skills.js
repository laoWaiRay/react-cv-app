import React, { Component } from 'react'
import Button from './Button';
import SkillsForm from './SkillsForm';
import SkillsDisplay from './SkillsDisplay';
import { v4 as uuidv4 } from 'uuid'

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
      savedSkills: [],
      skill: ''
    }
  }
  
  render() {
    return (
      <div className='section'>
        <h2>Skills</h2>
        <Button text='Add'/>
      </div>
    )
  }
}
