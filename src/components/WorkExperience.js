import React, { useState } from 'react'
import Button from './Button';
import WorkExperienceForm from './WorkExperienceForm';
import WorkExperienceDisplay from './WorkExperienceDisplay';
import { v4 as uuidv4 } from 'uuid'

const WorkExperience = (props) => {
  const [state, setState] = useState({
    isFormOpen: false,
    savedForms: [],
    formData: {
      id: '',
      company: '',
      date: '',
      jobTitle: '',
      location: '',
      description: '',
    },
    showRemove: false,
  });

  const clickHandler = () => {
    setState((prevState) => {
      return {
        ...prevState,
        isFormOpen: !prevState.isFormOpen,
      }
    })
  }

  const handleChange = (e, prop) => {
    const newFormData = {...state.formData, [prop]: e.target.value, id: uuidv4()}
    setState({
      ...state,
      formData: newFormData
    })
  }

  const save = () => {
    setState({
      isFormOpen: true,
      savedForms: state.savedForms.concat([state.formData]),
      formData: {
        id: '',
        company: '',
        date: '',
        jobTitle: '',
        location: '',
        description: '',
      },
      showRemove: false,
    });
  }

  const deleteForm = (id) => {
    let newSavedForms = [...state.savedForms];
    newSavedForms = newSavedForms.filter((form) => form.id !== id);
    setState((prevState) => { return {
      ...prevState,
      savedForms: newSavedForms,
    }})
  }

  const toggleRemove = () => {
    setState({
      ...state,
      showRemove: !state.showRemove,
    })
  }

  return (
    <div className='section'>
      <div className='section-header'>
        <h2>Work Experience</h2>
        {!state.isFormOpen ? 
          <Button 
            text='Add' 
            onClick={clickHandler}
            className='add-btn'
          /> : 
          ''
        }

        {!state.isFormOpen ? 
        <Button
          className={state.showRemove ? 'show-delete-btn active' : 'show-delete-btn'}
          text='Remove'
          onClick={toggleRemove}
        /> : 
        ''
      }
      </div>

      {state.isFormOpen ? 
        <WorkExperienceForm 
          formData={state.formData} 
          handleChange={handleChange} 
          save={save} 
          clickHandler={clickHandler}
        /> : 
        ''
      }

      {state.savedForms.length > 0 ? 
        state.savedForms.map((form, index) => { 
          return <WorkExperienceDisplay 
              key={index} 
              formData={form}
              onClick={deleteForm}
              showRemove={state.showRemove}
            /> 
        }) : 
        ''
      }
    </div>
  )
}

export default WorkExperience

