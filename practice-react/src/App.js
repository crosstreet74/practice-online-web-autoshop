import 'bootstrap/dist/css/bootstrap.css'
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/css/carousel.css";
import "./assets/css/myStyle.css";
// import "./assets/css/layout.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/icons8/css/line-awesome.min.css";

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Deal from './components/elements/ui/Deal';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/about"><About/></Route>
        <Route exact path="/catalog"><Deal/></Route>
        <Route exact path="/faqs"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
