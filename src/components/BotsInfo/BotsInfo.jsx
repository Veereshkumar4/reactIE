import "./BotsInfo.css";
import React from "react";

import { createStore } from 'redux'
import { connect } from 'react-redux'


function template() {
  return (
    <div className="App">

      <div className="App-header">
        <h2 >Count: {this.props.count}}</h2>
        <button>increment</button>
      </div>

      <div className="container-fluid m-0 p-0">

      </div>
    </div>
  );
};

function mapStateToProps(state){
  return{
    count: state.count
  }
}

export default connect(mapStateToProps)(template);
