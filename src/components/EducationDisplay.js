import React, { Component } from 'react'

export default class EducationDisplay extends Component {
  render() {
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
      </div>
    )
  }
}
