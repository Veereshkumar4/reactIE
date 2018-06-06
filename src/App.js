import React, { Component } from "react";
import logo from "./logo.svg";
import waveBackground from "./images/blue_wave_bg.png";
import honeywellLogo from "./images/honeywell bots portal logo.png";
import "./App.css";
import "../node_modules/react-tabs/style/react-tabs.css";
import "./tabs.css";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import BotsStore from "./components/BotsStore";
import BotsInfo from "./components/BotsInfo";

import Main from "./components/Main";

import axios from "axios";
import _ from "underscore";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

      </div>
    );
  }

  componentWillMount() {
    window.globalStorage = {
      selectedFilters:[]
    };
  }

}

const Header = () => (
  <header>
    {/* { <nav>
      <ul>
        <li><Link to='/'>BotsStore</Link></li>
        <li><Link to='/BotsInfo'>BotsInfo</Link></li>
      </ul>
    </nav> } */}
    <div className="mainHeader">
      <img
        src={honeywellLogo}
        draggable="false"
        className="honeywellLogo"
        alt="logo"
      />
      <div className="userNameContainer">
        <span className=""> Welcome,</span>{" "}
        <span className="userName"> Hiremath, Veereshkumar</span>{" "}
      </div>
    </div>
  </header>
);
