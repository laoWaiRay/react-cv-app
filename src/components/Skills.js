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
      skill: {
        text: '',
        id: '',
      }
    }
  }

  clickHandler = () => {
    this.setState({
      isFormOpen: !this.state.isFormOpen,
    })
  }

  handleChange = (e, prop) => {
    const newSkill = {...this.state.skill, [prop]: e.target.value, id: uuidv4()}
    this.setState({
      skill: newSkill,
    })
  }

  save = async () => {
    await this.setState({
      savedSkills: this.state.savedSkills.concat([this.state.skill]),
      skill: {
        text: '',
        id: ''
      }
    });
  }

  deleteSkill = (id) => {
    let newSavedSkills = [...this.state.savedSkills];
    newSavedSkills = newSavedSkills.filter((skill) => skill.id !== id)
    this.setState({
      savedSkills: newSavedSkills,
    })
  }
  
  render() {
    return (
      <div className='section'>
        <div className='section-header'>
          <h2>Skills</h2>
          {!this.state.isFormOpen ? 
            <Button 
              text='Add' 
              onClick={this.clickHandler}
              className='add-btn'
            /> : 
            ''
          }
        </div>

        {this.state.isFormOpen ? 
          <SkillsForm 
            skill={this.state.skill} 
            handleChange={this.handleChange} 
            save={this.save} 
            clickHandler={this.clickHandler}
          /> : 
          ''
        }

        {this.state.savedSkills.length > 0 ? 
          <SkillsDisplay
            skills={this.state.savedSkills}
            onClick={this.deleteSkill}
          /> : 
          ''
        }
      </div>
    )
  }
}
