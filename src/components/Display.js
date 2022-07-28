import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div className='contact-info-display' onClick={this.props.toggleEditable}>
        {this.props.text ? this.props.text : this.props.placeholder}
      </div>
    )
  }
}
