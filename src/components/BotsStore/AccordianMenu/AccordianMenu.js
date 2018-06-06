import React from "react";
import template from "./AccordianMenu.jsx";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import "../../../checkboxAdditional.css";

import { connect } from "react-redux";
import _ from "underscore";

class AccordianMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  onCheckboxChange = e => {
    console.log(e.target.checked);

    var itemName = e.currentTarget.attributes.itemname.value;
    var itemType = e.currentTarget.attributes.itemtype.value;

    if (e.target.checked) {
      window.globalStorage.selectedFilters.push(itemName);
    } else {
      var index = window.globalStorage.selectedFilters.indexOf(itemName);
      window.globalStorage.selectedFilters.splice(index, 1);
    }

    this.props.applyFilterSelection(itemName, itemType, e.target.checked);
  };

  generateAccordian() {
    return this.props.sideMenu.map(rows => {
      var menuItems = rows.subItems.map(cell => {
        var isChecked = "";

        if (_.contains(window.globalStorage.selectedFilters, cell)) {
          isChecked = true;
        }

        return (
          // <div class="pretty p-icon p-smooth" key={cell} >
          //   <input type="checkbox" ItemType={rows.Type} defaultChecked={isChecked} ItemName={cell} onChange={this.onCheckboxChange} />
          //   <div class="state p-success">
          //     <i class="icon material-icons">done</i>
          //     <label>{cell}</label>
          //   </div>
          // </div>
          <div className="o-checkboxWrapper">
            <div class="o-checkbox" key={cell}>
              <input
                type="checkbox"
                ItemType={rows.Type}
                defaultChecked={isChecked}
                ItemName={cell}
                onChange={this.onCheckboxChange}
                id={cell}
                class=""
              />
              <label for={cell} />
            </div>
            <label className="o-label">{cell}</label>
          </div>
        );
      });

      return (
        <AccordionItem expanded={true} key={rows.Title}>
          <AccordionItemTitle>
            <div className="u-position-relative">
              <span className="am-text-success">
                <span className="accorianDeopdownHeading">{rows.Title}</span>
              </span>
              <div className="am-fr am-text-success">
                <i className="accordion__arrow" role="presentation" />
              </div>
            </div>
          </AccordionItemTitle>
          <AccordionItemBody>{menuItems}</AccordionItemBody>
        </AccordionItem>
      );
    });
  }

  render() {
    return (
      <Tabs onSelect={index => console.log(index)}>
        <TabList>
          <Tab>Filter By</Tab>
        </TabList>

        <TabPanel>
          <Accordion accordion={false}>{this.generateAccordian()}</Accordion>
        </TabPanel>
      </Tabs>
    );
  }
}

function mapStateToProps(state) {
  return {
    allBots: state.allBots,
    mostViewedBots: state.mostViewedBots,
    recentBots: state.recentBots,
    allBots_initial: state.allBots_initial,
    sideMenu: state.sideMenu,
    state: state,
    filters: state.filters
  };
}

function matchDispatchToProps(dispatch) {
  return {
    applyFilter: filterObj => {
      const action = { type: "ApplyFilter", payload: filterObj };
      dispatch(action);
    },

    applyFilterSelection: (itemName, itemType, checked) => {
      const action = {
        type: "ApplyFilterSelection",
        payload: { itemName: itemName, itemType: itemType, checked: checked }
      };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(AccordianMenu);
