import React, { Component } from 'react'
import Button from './Button';
import EducationForm from './EducationForm';
import EducationDisplay from './EducationDisplay';
import { v4 as uuidv4 } from 'uuid'

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
      savedForms: [],
      formData: {
        id: '',
        school: '',
        date: '',
        qualification: '',
        location: '',
        description: '',
      },
      showRemove: false,
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
        school: '',
        date: '',
        qualification: '',
        location: '',
        description: '',
      },
      showRemove: false,
    });
    console.log(this.state.savedForms);
  }

  delete = (id) => {
    let newSavedForms = [...this.state.savedForms];
    newSavedForms = newSavedForms.filter((form) => form.id !== id)
    this.setState({
      savedForms: newSavedForms,
    })
  }

  toggleRemove = () => {
    this.setState({
      showRemove: !this.state.showRemove,
    })
  }

  render() {
    return (
      <div className='section'>
        <div className='section-header'>
          <h2>Education</h2>
          {!this.state.isFormOpen ? 
            <Button 
              text='Add' 
              onClick={this.clickHandler}
              className='add-btn'
            /> : 
            ''
          }
          {!this.state.isFormOpen ? 
            <Button
              className={this.state.showRemove ? 'show-delete-btn active' : 'show-delete-btn'}
              text='Remove'
              onClick={this.toggleRemove}
            /> : 
            ''
          }
          
        </div>

        {this.state.isFormOpen ? 
          <EducationForm 
            formData={this.state.formData} 
            handleChange={this.handleChange} 
            save={this.save} 
            clickHandler={this.clickHandler}
          /> : 
          ''
        }
        
        {this.state.savedForms.length > 0 ? 
          this.state.savedForms.map((form, index) => { 
            return <EducationDisplay 
                key={index} 
                formData={form}
                onClick={this.delete}
                showRemove={this.state.showRemove}
              /> 
          }) : 
          ''
        }
      </div>
    )
  }
}
