import React, { Component } from 'react'
import viewsIcon from '../../images/views_icon.png';

export default class VerticalListItems extends Component {
  render() {
    return (
      <div className="VerticalListItems">
        <div className="Title text-left pb-3"><strong>{this.props.Title}</strong></div>
        <div className="text-left">
            { this.props.Items.map(function(item, index){
                return <div key={ index } className="pb-2"><img className="pr-1" src={viewsIcon}/> {item} </div>;
            })}
        </div>
      </div>
    )
  }
}
