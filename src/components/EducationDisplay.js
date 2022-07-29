import React, { Component } from 'react'
import Button from './Button'

export default class EducationDisplay extends Component {
  render() {
      const id = this.props.formData.id;

    return (
      <div className='education-display'>
        <div className='row-1'>
          <h3>{this.props.formData.school}</h3>
          <h3>{this.props.formData.date}</h3>
        </div>
        <div className='row-2'>
          <h3>{this.props.formData.qualification}</h3>
          <h3>{this.props.formData.location}</h3>
        </div>
        <div className='description'>
          {this.props.formData.description}
        </div>
        {this.props.showRemove === true ? 
          <Button
            text='Remove'
            className='section-close'
            onClick={() => this.props.onClick(id)}
          /> :
          ''
        }
        
      </div>
    )
  }
}
