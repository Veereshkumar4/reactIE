import React, { Component } from "react";

import searchImage from "../../../images/search.png";
import "./search.css"

import axios from "axios";
import _ from "underscore";

import { connect } from "react-redux";
class Search extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };

  submitHandler = e => {
    //alert("serached for " + this.state.query);
    this.fetchSearchedBots(this.state.value);
    e.preventDefault();
  };

  fetchSearchedBots = query => {
    axios
      .post("https://qsearchinside.honeywell.com/rest/search", {
        q: query,

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

        botsObj.allBots = allBots;
        botsObj.mostViewedBots = mostViewedBots;

        this.props.updateSearchedBots(botsObj);
      })
      .catch(function(e) {
        console.log("errorAzios");
        console.log(e);
      });
  };

  clearSearch = e => {
    this.setState({ value: "" });
    var botsObj = {};
    //botsObj.allBots_initial = allBots;
    botsObj.allBots = this.props.allBots_initial;

    var mostViewedBots = _.first(
      _.sortBy(botsObj.allBots, "ViewCount").reverse(),
      7
    );

    botsObj.mostViewedBots = mostViewedBots;

    this.props.clearSearch(botsObj);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="searchHeading">
          Search, Chat, Download and Request for your Honeywell Bots here
        </div>

        <form onSubmit={this.submitHandler}>
          <div class="search">
            <div class="input-group">
              <input
                type="text"
                class="form-control textBox"
                placeholder="Search by Name "
                onChange={this.handleInputChange}
                value={this.state.value}
              />
              <span class="input-group-btn">
                <button
                  class="btn btn-default"
                  type="button"
                  onClick={this.clearSearch}
                >
                  x
                </button>
                <button class="btn btn-default" type="submit">
                  <img src={searchImage} />
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allBots_initial: state.allBots_initial
  };
}

function matchDispatchToProps(dispatch) {
  return {
    updateSearchedBots: botsObj => {
      const action = { type: "updateAllBots", payload: botsObj };
      dispatch(action);
    },

    clearSearch: botsObj => {
      const action = { type: "clearSearch", payload: botsObj };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Search);
