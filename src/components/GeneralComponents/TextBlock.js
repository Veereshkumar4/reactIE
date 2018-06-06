import React, { Component } from 'react'

export default class TextBlock extends Component {
  render() {
    return (
      <div className="TextBlock">
        <div className="Title"><strong>{this.props.Title}</strong></div>
        <div className="Text  pt-3">{this.props.Text}</div>
      </div>
    )
  }
}
