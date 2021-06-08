// import logo from "./logo.svg"
import "./App.css";
import Header from "./components/Header.js"
import Navi from "./components/Navi.js"
import Catalog from "./components/Catalog.js"
import Preview from "./components/Preview.js"
import React, { Fragment } from "react";

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
