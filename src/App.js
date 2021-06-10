import 'bootstrap/dist/css/bootstrap.css'
import React, { Fragment } from "react";

import "./assets/css/carousel.css";
import "./assets/css/myStyle.css";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
