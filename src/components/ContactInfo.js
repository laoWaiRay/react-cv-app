import React, { Component } from 'react'
import Tag from './Tag'
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      jobTitle: '',
      address: '',
      city: '',
      country: '',
      phone: '',
      email: '',
    }
  }

  handleChange = (e, prop) => {
    this.setState({
      [prop]: e.target.value
    })
  }

  render() {
    return (
      <div className='contact-info'>
        <div className='contact-info-card'>
          <Tag placeholder='Name' text={this.state.name} handleChange={this.handleChange} prop='name'/>
          <Tag placeholder='Job Title' text={this.state.jobTitle} handleChange={this.handleChange} prop='jobTitle'/>
        </div>
        <div className='contact-info-details'>
          <Tag placeholder='Address' text={this.state.address} handleChange={this.handleChange} prop='address'/>
          <Tag placeholder='City' text={this.state.city} handleChange={this.handleChange} prop='city'/>
          <Tag placeholder='Country' text={this.state.country} handleChange={this.handleChange} prop='country'/>
          <Tag placeholder='Phone' text={this.state.phone} handleChange={this.handleChange} prop='phone'/>
          <Tag placeholder='Email' text={this.state.email} handleChange={this.handleChange} prop='email'/>
        </div>
      </div>
    )
  }
}
