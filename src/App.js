import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MtgcardsContainer from "./components/MtgcardsContainer.js";
import About from './components/About'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/mtgcards' component={MtgcardsContainer}/>
          <Route path='/' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;