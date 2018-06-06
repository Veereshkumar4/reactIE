import React, { Component } from "react";
import waveBackground from "../images/blue_wave_bg.png";
import honeywellLogo from "../images/honeywell bots portal logo.png";

import { connect } from "react-redux";

import { Link , withRouter} from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import BotsStore from "../components/BotsStore";
import BotsInfo from "../components/BotsInfo";

import axios from "axios";
import _ from "underscore";

class Main extends Component {
    render() {
      return (
        <main>
          <Switch>
            <Route exact path="/" component={BotsStore} />
            <Route path="/BotsInfo" component={BotsInfo} />
          </Switch>
        </main>
      )
    }

    componentDidMount() {
        //alert('did')
      var self = this;
      //axios.get('http://www.mocky.io/v2/5b0d8ffb3100005a009d5745?mocky-delay=3000ms')
      axios
        .post("https://qsearchinside.honeywell.com/rest/search", {
          q: "",

          cq: '@syssource=("HonBots")',
          excerptLength: "0",
          language: "en",

          sortCriteria: "relevancy", // Sort criteria(s) to use to sort results. E.g. dateascending, relevancy, datedescending etc.

          firstResult: 0,

          numberOfResults: 1000,
          enableDidYouMean: "true"
        })
        .then(response => {
          function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }

          var resultsListItems = _.filter(response.data.results, function(item) {
            if (item.raw.sysdocumenttype == "ListItem") {
              return true;
            }
          });

          var allBots = _.map(resultsListItems, item => {
            return {
              Title: item.raw.bottitle,
              ViewCount: getRandomInt(1, 300),
              Rating: getRandomInt(1, 5),
              URL: item.raw.boturl,
              Author: item.raw.botprimaryowner,
              Benifits: ["One", "Two", "Theree"],
              WorksWith: ["One", "Two", "Theree"],
              Features: [
                "accusantium doloremque laudantium",
                "accusantium doloremque laudantium",
                "accusantium doloremque laudantium"
              ],
              _Function: item.raw.botfunction,
              SBG: item.raw.botsbg,
              _Id: item.raw.botid,
              _Date: item.raw.sysdate,
              Productivity: item.raw.botexpectedproductivit,
              ProblemStatement: item.raw.botproblemstatement,
              Icon: item.raw.boticon
            };
          });

          var mostViewedBots = _.first(
            _.sortBy(allBots, "ViewCount").reverse(),
            7
          );

          var botsObj = {};

          botsObj.allBots_initial = allBots;
          botsObj.allBots = allBots;
          botsObj.mostViewedBots = mostViewedBots;

          self.props.renderBots(botsObj);
        })
        .catch(function(e) {
          console.log("errorAzios");
          console.log(e);
        });
    }
  }

function mapStateToProps(state) {
    return {
      allBots: state.allBots,
      mostViewedBots: state.mostViewedBots,
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

export default withRouter(connect(mapStateToProps,matchDispatchToProps)(Main))