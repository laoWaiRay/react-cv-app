import React, { Component } from 'react'

export default class TextField extends Component {
  render() {
    return (
      <textarea 
        rows='5' 
        cols='30' 
        placeholder={this.props.placeholder} 
        value={this.props.text} 
        onChange={(e) => {this.props.handleChange(e, this.props.prop)}}
        className={this.props.className}
        onKeyDown={(e)=>{
          if (e.key === 'Enter' && !e.shiftKey) {
            this.props.onEnterKey();
          }
        }}
      >
      </textarea>
    )
  }
}
