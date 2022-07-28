import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input
      type='text'
      value={this.props.text}
      onChange={(e) => {this.props.handleChange(e, this.props.prop)}}
      onKeyDown={(e)=>{
        if (e.key === 'Enter') {
          this.props.toggleEditable()
        }
      }}
      onBlur={this.props.toggleEditable}
      placeholder={this.props.placeholder}
      autoFocus
      >
      </input>
    )
  }
}
