import React, { Component } from "react";
import "./nav.css";
class Nav extends Component {
  render() {
    return (
      <ul className="menu">
        <li id="navButton">
          <a href="https://master.d1pl190zpnnzwt.amplifyapp.com/home">Submission</a>
        </li>
        <li id="navButton">
          <a href="/browser">Browser</a>
        </li>
        <li id="navButton">
          <a href="https://master.d1pl190zpnnzwt.amplifyapp.com/register">Get User ID</a>
        </li>
      </ul>
    );
  }
}

export default Nav;
