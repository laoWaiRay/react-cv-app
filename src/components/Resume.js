import React from 'react'
import ContactInfo from './ContactInfo'
import Education from './Education'
import WorkExperience from './WorkExperience'
import Skills from './Skills'

const Resume = () => {
  return (
    <div className='resume'>
      <ContactInfo/>
      <Education/>
      <WorkExperience/>
      <Skills/>
    </div>
  )
}

export default Resume