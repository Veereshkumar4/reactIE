import React    from "react";
import template from "./BotCard.jsx";
import chatImageNormal from '../BotCard/images/chat active.png';
import chatImageHover from '../BotCard/images/chat hover.png';
import chatImagePressed from '../BotCard/images/chat pressed.png';

import StarRatingComponent from 'react-star-rating-component';
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { debug } from "util";

import viewsIcon from '../../../images/views_icon.png';
import botImage from '../../../images/bot_app_icon.png';

class BotCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      active: this.props.active,
      additionalClass: this.props.active=="true"? ' bot-card-active ' : '',
      chatBtnImageURL: chatImageNormal,

      botObject: this.props.BotObject
    };

    this.onClick = this.onClick.bind(this);
    this.ohMouseEnter = this.ohMouseEnter.bind(this);
    this.ohMouseLeave = this.ohMouseLeave.bind(this);

    this.chatBtnHover = this.chatBtnHover.bind(this);
    this.chatBtnPress = this.chatBtnPress.bind(this);
    this.chatBtnUnHover = this.chatBtnUnHover.bind(this);
    this.chatBtnUnPress = this.chatBtnUnPress.bind(this);
    this.onStarClick = this.onStarClick.bind(this);

  }

  render() {
    return (
      <div className={"bot-card row p-0" + this.state.additionalClass}
            onMouseEnter={this.ohMouseEnter}
            onMouseLeave={this.ohMouseLeave}
      >
        <div className="icon col-12" onClick={this.redirectToBotInfo.bind(this)} >
          <img className="botImage" src={botImage}/>
        </div>
        <div className="title col-12 text-left bg-white"> {this.props.Title}</div>

        <div className = "ratingViewsSection row col-12 m-0 p-1 bg-white">
          <div className="rating col-sm-8 p-0 text-left pl-2">

            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={this.props.Rating}
              onStarClick={this.onStarClick}
              editing={true}
              emptyStarColor={"#D0D0D0"}
              starColor={"#FF7F00"}
            />

          </div>
          <div className="views col-sm-4 p-0"><img src={viewsIcon}/> {this.props.Views} </div>
        </div>

        <div className="chat col-12 bg-white pb-2 ">

              <img

                draggable = "false"
                src={this.state.chatBtnImageURL}

                onMouseEnter={this.chatBtnHover}
                onMouseDown={this.chatBtnPress}
                onMouseLeave={this.chatBtnUnHover}
                onMouseUp={this.chatBtnUnPress}
              />

        </div>
      </div>
    );
  }

  redirectToBotInfo(){
    this.props.updateSelectedBot(this.props.BotObj);
    this.props.history.push('/Botsinfo')
  }

  onClick(){
    this.setState({count: this.state.count + 1})
  }

  ohMouseEnter(){
    if(!this.state.active)
      this.setState({ additionalClass: ' bot-card-active ' })
  }

  ohMouseLeave(){
    if(!this.state.active)
    this.setState({ additionalClass: '' })
  }

  chatBtnHover(){this.setState({chatBtnImageURL: chatImageHover})}
  chatBtnPress(){this.setState({chatBtnImageURL: chatImagePressed})}
  chatBtnUnHover(){this.setState({chatBtnImageURL: chatImageNormal})}
  chatBtnUnPress(){this.setState({chatBtnImageURL: chatImageHover})}

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
}

function mapStateToProps(state){
  return{
    //currentBot: state.selectedBot
  }
}

function matchDispatchToProps(dispatch){
  return{
    updateSelectedBot:(botObject)=>{
      const action = {type:'UpdateSelectedBot', payload: botObject}
      dispatch(action);
    },
  }
}

export default withRouter(connect(mapStateToProps,matchDispatchToProps)(BotCard))
