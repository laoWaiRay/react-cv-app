import React, { Component } from 'react'
import Tag from './Tag'
import TextField from './TextField'
import Button from './Button'

export default class EducationForm extends Component {
  saveForm = (e) => {
    this.props.save();
    this.props.clickHandler();
  }

  render() {
    return (
      <div className='education-form'>
        <div className='row-1'>
          <Tag placeholder='School name' prop='school' text={this.props.formData.school} handleChange={this.props.handleChange}/>
          <Tag placeholder='Date attended' prop='date' text={this.props.formData.date} handleChange={this.props.handleChange}/>
        </div>
        <div className='row-2'>
          <Tag placeholder='Qualification' prop='qualification' text={this.props.formData.qualification} handleChange={this.props.handleChange}/>
          <Tag placeholder='Location' prop='location' text={this.props.formData.location} handleChange={this.props.handleChange}/>
        </div>
        <div className='description'>
          <TextField 
            className='textfield' 
            placeholder='Say something about it...' 
            prop='description' text={this.props.formData.description} 
            handleChange={this.props.handleChange}
            onEnterKey={this.saveForm}
          />
        </div>
        <div className='buttons'>
          <Button text='Save' onClick={this.saveForm}/>
          <Button text='Cancel' onClick={this.props.clickHandler}/>
        </div>
      </div>
    )
  }
}
