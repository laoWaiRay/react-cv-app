import React, { Component } from 'react'
import Button from './Button';
import WorkExperienceForm from './WorkExperienceForm';
import WorkExperienceDisplay from './WorkExperienceDisplay';
import { v4 as uuidv4 } from 'uuid'

export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    }
  }

  clickHandler = () => {
    this.setState({
      isFormOpen: !this.state.isFormOpen,
    })
  }

  handleChange = (e, prop) => {
    const newFormData = {...this.state.formData, [prop]: e.target.value, id: uuidv4()}
    this.setState({
      formData: newFormData
    })
  }

  save = async () => {
    await this.setState({
      savedForms: this.state.savedForms.concat([this.state.formData]),
      formData: {
        id: '',
        company: '',
        date: '',
        jobTitle: '',
        location: '',
        description: '',
      },
    });
    console.log(this.state.savedForms);
  }

  render() {
    return (
      <div className='section'>
        <div className='section-header'>
          <h2>Work Experience</h2>
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
          <WorkExperienceForm 
            formData={this.state.formData} 
            handleChange={this.handleChange} 
            save={this.save} 
            clickHandler={this.clickHandler}
          /> : 
          ''
        }
        {this.state.savedForms.length > 0 ? 
          this.state.savedForms.map((form, index) => { 
            return <WorkExperienceDisplay 
                key={index} 
                formData={form}
              /> 
          }) : 
          ''
        }
      </div>
    )
  }
}


