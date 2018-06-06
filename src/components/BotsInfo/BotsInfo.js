import React    from "react";
import template from "./BotsInfo.jsx";

import { createStore } from 'redux'
import { connect } from 'react-redux'

import MDSpinner from "react-md-spinner";
import BotCard from '../BotsStore/BotCard/BotCard';
import { Link } from 'react-router-dom'

import {TabList, TabPanel, Tab,Tabs} from 'react-tabs';
import StarRatingComponent from 'react-star-rating-component';

import startChatBtn from '../BotsStore/BotCard/images/chat hover.png';
import viewsIcon from '../../images/views_icon.png';

import botImage from '../../images/bot_app_icon.png';

import TextBlock from '../GeneralComponents/TextBlock'
import VerticleListItems from '../GeneralComponents/VerticleListItems'

class BotsInfo extends React.Component {
  render(props) {
    return (
      <div className="App botsInfoContainer">

        <div className="App-header  col-sm-12">

          <div className="botDetailsContainer">
              <div className="botIcon col-sm-3">
                <img className="botImage" src={botImage}/>
              </div>
              <div className="botHeading col-sm-6">
                  <Link to="/" className="linkBack">&lt; Back</Link>
                  <div className="botTitle">{this.props.selectedBot.Title}</div>
                  <div className="botAuthor">By <u><strong>{this.props.selectedBot.Author}</strong></u></div>

                  <div className="Rating col-sm-12 m-0 pl-0 pb-0 pt-0">

                      <div className = " row col-12 m-0 p-0 ">
                        <div className="rating text-left">

                          <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={this.props.selectedBot.Rating}
                            onStarClick={this.onStarClick}
                            editing={true}
                            emptyStarColor={"white"}
                            starColor={"#FF7F00"}
                          />

                        </div>
                        <div className="views">
                          <img className="pr-1" src={viewsIcon}/>{this.props.selectedBot.ViewCount}
                        </div>
                      </div>

                  </div>
              </div>
              <div className="startChat  col-sm-3">
                <img src={startChatBtn}/>
              </div>
          </div>

        </div>

        <div className="container-fluid p-0" >
            {/* <MDSpinner/> */}

            {/* <BotCard  Title={this.props.selectedBot.Title}
                      Rating={this.props.selectedBot.Rating}
                      Views={this.props.selectedBot.ViewCount} /> */}

            <Tabs >
            <TabList >
              <Tab>Overview</Tab>
              <Tab>How it works</Tab>
              <Tab>Get Bot</Tab>
              <Tab>Reviews (12)</Tab>
            </TabList>

            <TabPanel>

              {/* <div className="row botsInfoMainPanel" >
                      <BotCard  Title={this.props.selectedBot.Title}
                      Rating={this.props.selectedBot.Rating}
                      Views={this.props.selectedBot.ViewCount} />

              </div> */}

              <div className="row botsInfoMainPanel">
                  <div className="col-md-6 pl-0">
                      <div className="col-md-12 text-left  pt-5">
                        <TextBlock Title="Description"
                                    Text={this.props.selectedBot.ProblemStatement}
                                    />
                      </div>

                      <div className="col-md-4 float-left  pt-5" >
                          <VerticleListItems  Title="Benifits" Items={this.props.selectedBot.Benifits}/>

                      </div>

                      <div className="col-md-4 float-left  pt-5">
                        <VerticleListItems Title="Works With" Items={this.props.selectedBot.WorksWith}/>

                      </div>

                  </div>

                  <div className="col-md-6">

                      <div className="col-md-12 float-left pt-5" >
                          <VerticleListItems  Title="Applications" Items={this.props.selectedBot.Benifits}/>

                      </div>

                      <div className="col-md-12 float-left pt-5" >
                          <VerticleListItems  Title="Features" Items={this.props.selectedBot.Features}/>

                      </div>

                  </div>
              </div>

            </TabPanel>
            <TabPanel >
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    selectedBot: state.selectedBot
  }
}

function matchDispatchToProps(dispatch){
  return{
    // onIncrement:()=>{
    //   const action = {type:'AddBot'}
    //   dispatch(action);
    // },

    // addBot:()=>{
    //   const action = {type:'addBot'}
    //   dispatch(action);
    // }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(BotsInfo);
