import React, { Component } from 'react'
import ContactInfo from './ContactInfo'
import Education from './Education'
import WorkExperience from './WorkExperience'
import Skills from './Skills'

export default class Resume extends Component {
  render() {
    return (
      <div className='resume'>
        <ContactInfo/>
        <Education/>
        <WorkExperience/>
        <Skills/>
      </div>
    )
  }
}
