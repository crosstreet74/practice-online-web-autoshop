// import logo from "./logo.svg"
import "./App.css";
import Preview from "./components/Preview.js"
import Item from "./components/Item.js"
import React, { Component, Fragment } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>React App by {this.props.name}</h1>
      </header>
    )
  }
}

class Navi extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">
              HTML
            </a>
          </li>
          <li>
            <a href="1.html">
              CSS
            </a>
          </li>
          <li>
            <a href="1.html">
              JavaScript
            </a>
          </li>
          <li>
            <a href="1.html">
              JQuery
            </a>
          </li>
          <li>
            <a href="1.html">
              React
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

class Catalog extends Component {
  render() {
    return (
      <Fragment>
        <Item brand="Land Rover" model="Range Rover"></Item>
        <Item brand="Kia" model="Stinger"></Item>
        <Item brand="Porsche" model="Cayenne" ></Item>
        <Item brand="Mercedes-Benz" model="GT 4-Door Coupe" ></Item>
        <Item brand="Jeep" model="Renegade Longitude"></Item>
      </Fragment>
    )
  }
}

function App() {
  return (
    <Fragment>
      <Header name="ACompany"></Header>
      <Navi></Navi>
      <Catalog></Catalog>
      <Preview></Preview>
    </Fragment>
  );
}

export default App;
