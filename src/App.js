import React, { Component } from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm"
import LoginForm from "./components/LoginForm"
import MtgcardsContainer from "./components/MtgcardsContainer"
// import MtgcardsDetail from "./components/MtgcardsDetail"
// import AuctionbidForm from "./components/AuctionbidForm"
import About from './components/About'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends Component {

  state = { 
    user: null,
    mtgcardsContainer: []
    // mtgcard: [],
    // bid: 0
  }

  //signup form 
  handleSignup = (userData) => {
    const { name, username } = userData
    const newUser = {
      name,
      username
    }
    fetch('http://localhost:3000/signup', {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(newUser => {
        this.setState({
          // name: usnewUser.name, 
          // username: newUser.username   
          user: newUser
        }, () => { this.props.history.push("/") }) //back to main page
      })
  }

  //login form
  // get from login form fetch, post into login Route - backend, send back user and set state here in 
  handleLogin = (userData) => {
    // const { name, username } = userData
    fetch('http://localhost:3000/login')
      .then(res => res.json())
      .then(userData => {
        this.setState({ user: userData }, () => { this.props.history.push("/") })
      })
  }

  //mtgcardscontainer
  componentDidMount() {
    fetch('http://localhost:3000/mtgcards')
      .then(res => res.json())
      .then(mtgcardArray => this.setState({ mtgcardsContainer: mtgcardArray }))
  }

  mtgcardscontainer = () => <MtgcardsContainer renderMtgcards={this.state.mtgcardsContainer} />

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/signup' render={() => <SignupForm handleSignup={this.handleSignup} />} />
          <Route path='/login' render={() => <LoginForm handleLogin={this.handleLogin} />} />
          <Route path='/MtgcardsContainer' component={this.mtgcardscontainer} />
          <Route path='/' component={About} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);