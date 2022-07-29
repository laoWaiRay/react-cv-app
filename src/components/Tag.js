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

  componentDidMount() {
    if (this.props.isOpen === 'true') this.toggleEditable();
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
          toggleEditable={this.props.isOpen === 'true' ? undefined : this.toggleEditable}
          placeholder={this.props.placeholder}
          prop={this.props.prop}
          onEnterPress={this.props.onEnterPress} 
          isOpen={this.props.isOpen}
        />}
      </div>
    )
  }
}
