import axios from "axios";
import update from "immutability-helper";
import { createStore } from "redux";
import _ from "underscore";

const initialState = {
  count: 10,

  allBots_initial: [],

  allBots: [],
  mostViewedBots: [],
  recentBots: [],
  bookmarkedBots: [],
  searchedBots: [],

  filters: {
    SBG: [],
    _Function: []
  },

  relatedBots: [],

  selectedBot: "",

  sideMenu: [
    {
      Title: "By Type",
      Type: "Type",
      subItems: ["All Bots", "Process Bots", "Chatbots", "Composite Bots"]
    },

    {
      Title: "By Business Process",
      Type: "_Function",
      subItems: [
        "All Bots",
        "Recently Published",
        "Popular",
        "Human Resources",
        "Procurement",
        "Information Technology",
        "Business Management",
        "Engineering"
      ]
    },

    {
      Title: "By SBG",
      Type: "SBG",
      subItems: ["AERO", "CORP", "HBT", "SPS", "PMT"]
    }
  ]
};

const reducer = (state = initialState, action) => {
  console.log("reducerhit");
  console.log(action);
  switch (action.type) {
    case "clearSearch":
      var newState = update(state, {
        allBots: { $set: action.payload.allBots }
      });
      newState = update(newState, {
        mostViewedBots: { $set: action.payload.mostViewedBots }
      });
      return newState;


    case "updateAllBots":
      var newState = update(state, {
        allBots: { $set: action.payload.allBots }
      });
      newState = update(newState, {
        mostViewedBots: { $set: action.payload.mostViewedBots }
      });
      return newState;

    case "IncrerementClicked":
      console.log("here");
      return Object.assign({}, state, { count: state.count + 20 });

    case "initiateAllBots":
      var newState = update(state, {
        allBots: { $set: action.payload.allBots }
      });
      newState = update(newState, {
        mostViewedBots: { $set: action.payload.mostViewedBots }
      });
      newState = update(newState, {
        allBots_initial: { $set: action.payload.allBots }
      });

      return newState;

      return update(state, {
        allBots: { $set: action.payload.allBots },
        mostViewedBots: { $set: action.payload.mostViewedBots },
        allBots_initial: { $set: action.payload.allBots }
      });

    case "UpdateSelectedBot":
      return update(state, { selectedBot: { $set: action.payload } });

    case "UpdateSearchedBots":
      return update(state, { searchedBots: { $set: action.payload } });

    case "ApplyFilterSelection":
      var filterObj = state.filters;

      if (action.payload.checked) {
        filterObj[action.payload.itemType].push(action.payload.itemName);
      } else {
        filterObj[action.payload.itemType] = _.filter(
          filterObj[action.payload.itemType],
          function(item) {
            return item !== action.payload.itemName;
          }
        );
      }

      var filteredBots = [];

      state.allBots_initial.map((bot, index) => {
        var filterApplied = false;
        _.mapObject(state.filters, (val, key) => {
          if (val.length > 0) {
            filterApplied = true;
          }
        });

        if (filterApplied) {
          _.mapObject(state.filters, (val, key) => {
            if (val.length > 0) {
              if (key == "SBG") {
                if (_.contains(val, bot.SBG)) {
                  filteredBots.push(bot);
                }

                var lp = 0;
              }
              if (key == "_Function") {
                if (_.contains(val, bot._Function)) {
                  filteredBots.push(bot);
                }

                var lp = 0;
              }
            }
          });
        } else {
          //return bot;
        }
      });

      var newState = update(state, { allBots: { $set: filteredBots } });

      var filterApplied = false;
      _.mapObject(state.filters, (val, key) => {
        if (val.length > 0) {
          filterApplied = true;
        }
      });
      if (!filterApplied) {
        newState = update(newState, {
          allBots: { $set: state.allBots_initial }
        });
      }

      newState = update(newState, { filters: { $set: filterObj } });

      return newState;

    default:
      console.log("default");
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
