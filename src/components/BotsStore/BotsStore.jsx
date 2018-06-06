import "./BotsStore.css";
import React from "react";

import AccordianMenu from './AccordianMenu'
import MainPanel from './MainPanel/'
import Search from 'react-search-box';

import searchImage from '../../images/search.png';

function template() {
  return (
    <div className="App">

      <div className="App-header">
        <div className="searchHeading">Search, Chat, Download and Request
for your Honeywell Bots here</div>

      <div class="search">
          <div class="input-group">
            <input type="text" class="form-control" placeholder='Search by Name / Application / Author'/>
            <span class="input-group-btn">
              <button class="btn btn-default" type="button"><img src={searchImage}/></button>
            </span>
          </div>
        </div>

      </div>

      <div className="container-fluid m-0 p-0">
        <div className="sidePanel float-left">
          <AccordianMenu></AccordianMenu>
        </div>

        <div className="mainPanel">
            <MainPanel></MainPanel>
        </div>

      </div>
    </div>
  );
};

export default template;
