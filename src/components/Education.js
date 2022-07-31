import React, { useState } from 'react'
import Button from './Button';
import EducationForm from './EducationForm';
import EducationDisplay from './EducationDisplay';
import { v4 as uuidv4 } from 'uuid'

const Education = (props) => {

  const [state, setState] = useState({
    isFormOpen: false,
    savedForms: [],
    formData: {
      id: '',
      school: '',
      date: '',
      qualification: '',
      location: '',
      description: '',
      showRemove: false,
    },
  });

  const clickHandler = () => {
    setState((prevState) => { return {
      ...prevState,
      isFormOpen: !prevState.isFormOpen,
  }})
  }

  const handleChange = (e, prop) => {
    const newFormData = {...state.formData, [prop]: e.target.value, id: uuidv4()}
    setState({
      ...state,
      formData: newFormData,
    })
  }

  const save = () => {
    setState( (prevState) => { 
      return {
      isFormOpen: true,
      savedForms: [...prevState.savedForms].concat(prevState.formData),
      formData: {
        id: '',
        school: '',
        date: '',
        qualification: '',
        location: '',
        description: '',
      },
      showRemove: false,
    }});
  }

  const deleteForm = (id) => {
    let newSavedForms = [...state.savedForms];
    newSavedForms = newSavedForms.filter((form) => form.id !== id);
    setState({
      ...state,
      savedForms: newSavedForms,
    })
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
        <h2>Education</h2>
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
        <EducationForm 
          formData={state.formData} 
          handleChange={handleChange} 
          save={save} 
          clickHandler={clickHandler}
        /> : 
        ''
      }
      
      {state.savedForms.length > 0 ? 
        state.savedForms.map((form, index) => { 
          return <EducationDisplay 
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

export default Education