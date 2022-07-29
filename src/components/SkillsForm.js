import React, { Component } from 'react'
import Tag from './Tag'
import Button from './Button';

export default class SkillsForm extends Component {
  saveForm = (e) => {
    this.props.save();
    this.props.clickHandler();
  }

  render() {
    return (
      <div className='skills-form'>
        <h3>What are you good at?</h3>
        <Tag 
          placeholder='Enter a skill...'
          text={this.props.skill.text}
          prop='text'
          handleChange={this.props.handleChange}
          isOpen='true'
          onEnterPress={this.saveForm}
        />
        <div className='buttons'>
          <Button text='Save' onClick={this.saveForm}/>
          <Button text='Cancel' onClick={this.props.clickHandler}/>
        </div>
      </div>
    )
  }
}
