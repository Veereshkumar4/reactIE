import "./BotsStore.css";
import React from "react";

import AccordianMenu from "./AccordianMenu";
import MainPanel from "./MainPanel/";
import Search from "./Search/search";

class BotsStore extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Search/>
        </div>

        <div className="container-fluid m-0 p-0">
          <div className="sidePanel float-left">
            <AccordianMenu />
          </div>

          <div className="mainPanel">
            <MainPanel />
          </div>
        </div>
      </div>
    );
  }

}

export default BotsStore;
