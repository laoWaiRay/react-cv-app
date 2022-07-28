import React, { Component } from 'react'
import Display from './Display';
import Input from './Input';

export default class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    }
  }

  toggleEditable = (e) => {
    this.setState({
      isEdit: !this.state.isEdit,
    })
  }

  render() {
    return (
      <div className='tag'>
        {!(this.state.isEdit) ? 
        <Display 
          text={this.props.text} 
          placeholder={this.props.placeholder}
          toggleEditable={this.toggleEditable}
        /> : 
        <Input 
          text={this.props.text} 
          handleChange={this.props.handleChange} 
          toggleEditable={this.toggleEditable}
          placeholder={this.props.placeholder}
          prop={this.props.prop} 
        />}
      </div>
    )
  }
}
