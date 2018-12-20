import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/logo.svg";

const Header = () => (
  <header className="App-header">
    <Link to="/">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Movie database</h1>
    </Link>
  </header>
);

export default Header;
