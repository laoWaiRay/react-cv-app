import React, { useState } from 'react'
import Button from './Button';
import SkillsForm from './SkillsForm';
import SkillsDisplay from './SkillsDisplay';
import { v4 as uuidv4 } from 'uuid'

const Skills = (props) => {
  // constructor(props) {
  //   super(props);
  //   state = {
  //     isFormOpen: false,
  //     savedSkills: [],
  //     skill: {
  //       text: '',
  //       id: '',
  //     }
  //   }
  // }
  const [state, setState] = useState({
    isFormOpen: false,
    savedSkills: [],
    skill: {
      text: '',
      id: '',
    },
  })

  const clickHandler = () => {
    setState((prevState) => {return {
      ...prevState,
      isFormOpen: !state.isFormOpen,
    }})
  }

  const handleChange = (e, prop) => {
    const newSkill = {[prop]: e.target.value, id: uuidv4()}
    setState({
      ...state,
      skill: newSkill,
    })
  }

  const save = () => {
    setState({
      isFormOpen: true,
      savedSkills: state.savedSkills.concat([state.skill]),
      skill: {
        text: '',
        id: ''
      }
    });
  }

  const deleteSkill = (id) => {
    let newSavedSkills = [...state.savedSkills];
    newSavedSkills = newSavedSkills.filter((skill) => skill.id !== id)
    setState({
      ...state,
      savedSkills: newSavedSkills,
    })
  }
  
  return (
    <div className='section'>
      <div className='section-header'>
        <h2>Skills</h2>
        {!state.isFormOpen ? 
          <Button 
            text='Add' 
            onClick={clickHandler}
            className='add-btn'
          /> : 
          ''
        }
      </div>

      {state.isFormOpen ? 
        <SkillsForm 
          skill={state.skill} 
          handleChange={handleChange} 
          save={save} 
          clickHandler={clickHandler}
        /> : 
        ''
      }

      {state.savedSkills.length > 0 ? 
        <SkillsDisplay
          skills={state.savedSkills}
          onClick={deleteSkill}
        /> : 
        ''
      }
    </div>
  )
}

export default Skills