import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import BotCard from "../BotCard";
import { connect } from "react-redux";
import axios from "axios";
import _ from "underscore";
import LoadingCard from "../../GeneralComponents/Loading";

class MainPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Tabs forceRenderTabPanel={true} onSelect={index => console.log(index)}>
        <TabList>
          <Tab>Featured</Tab>
          <Tab>Most Viewed</Tab>
          <Tab>Coming soon</Tab>
          <Tab>Bookmarks</Tab>
        </TabList>

        <TabPanel>
          <div className="row">
            {this.props.allBots.length == 0
              ? () => {
                  <LoadingCard />;
                }
              : this.props.allBots.map((bot, index) => {
                  return (
                    <BotCard
                      key={index}
                      BotObj={bot}
                      Title={bot.Title}
                      Rating={bot.Rating}
                      Views={bot.ViewCount}
                    />
                  );
                })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            {(this.props.allBots.length
              ? _.first(_.sortBy(this.props.allBots, "ViewCount").reverse(), 7)
              : this.props.allBots
            ).map((bot, index) => {
              return (
                <BotCard
                  key={index}
                  BotObj={bot}
                  Title={bot.Title}
                  Rating={bot.Rating}
                  Views={bot.ViewCount}
                />
              );
            })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="row">
            {this.props.recentBots.map(function(bot, index) {
              return (
                <BotCard
                  key={index}
                  BotObj={bot}
                  Title={bot.Title}
                  Rating={bot.Rating}
                  Views={bot.ViewCount}
                />
              );
            })}
          </div>
        </TabPanel>

        <TabPanel>
        <h2>Any content 4</h2>
      </TabPanel>

      <TabPanel>
      <div className="row">
            {this.props.searchedBots.length == 0
              ? () => {
                  <div>Nothing searched..</div>;
                }
              : this.props.searchedBots.map((bot, index) => {
                  return (
                    <BotCard
                      key={index}
                      BotObj={bot}
                      Title={bot.Title}
                      Rating={bot.Rating}
                      Views={bot.ViewCount}
                    />
                  );
                })}
          </div>
        </TabPanel>

      </Tabs>
    );
  }

}

function mapStateToProps(state) {
  return {
    allBots: state.allBots,
    mostViewedBots: state.mostViewedBots,
    searchedBots: state.searchedBots,
    recentBots: state.recentBots,
    filters: state.filters
  };
}

function matchDispatchToProps(dispatch) {
  return {
    // onIncrement:()=>{
    //   const action = {type:'IncrerementClicked'}
    //   dispatch(action);
    // },

    renderBots: botsObj => {
      const action = { type: "initiateAllBots", payload: botsObj };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(MainPanel);
