import React, { Component } from "react";
import "./App.scss";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Cars from "./Cars/Cars";
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink
                to="/"
                exact="true"
                // activeClassName={'wfm-active'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                // activeStyle={{
                //   color: 'blue'
                // }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/cars",
                  // search: '?a=1&b=2',
                  // hash: 'wfm-hash'
                }}
              >
                Cars
              </NavLink>
            </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/about" exact="true" element={<About />} />
          <Route path="/cars" exact="true" element={<Cars />} />
          <Route path="/cars/:name" element={<CarDetail/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
