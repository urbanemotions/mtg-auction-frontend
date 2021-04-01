import React, { Component } from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm"
import LoginForm from "./components/LoginForm"
import MtgcardsContainer from "./components/MtgcardsContainer"
import AuctionbidsContainer from "./components/AuctionbidsContainer"
// import AuctionbidForm from "./components/AuctionbidForm"
import About from './components/About'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends Component {

  state = { 
    user: null,
    mtgcardsContainer: [], 
    // mtgcard: [],
    bid: 0
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
        this.setState({ user: newUser }, () => { this.props.history.push("/") }) //back to about page
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
    fetch('http://localhost:3000/auctionbids')
      .then(res => res.json())
      .then(bidArray => this.setState({ auctionbidsContainer: bidArray }))
  }

  mtgcardscontainer = () => <MtgcardsContainer renderMtgcards={this.state.mtgcardsContainer} />
  // not allowed two cdm
  //bids shown in auctionbidscontainers 
  // componentDidMount() {
    // fetch('http://localhost:3000/auctionbids')
    //   .then(res => res.json())
    //   .then(bidArray => this.setState({ auctionbidsContainer: bidArray }))
  // }
  auctionbidscontainer = () => <AuctionbidsContainer renderAuctionbids={this.state.auctionbidsContainer} />

  // p = Promise.all([
  //   fetch('http://localhost:3000/mtgcards'),
  //   fetch('http://localhost:3000/auctionbids')
  // ]).then(([mtgcards, auctionbids]) => console.log(mtgcards.json()));

// bid form
  handleBid = (bidData) => {
    fetch('http://localhost:3000/auctionbids')
      .then(res => res.json())
      .then(bidData => {
        this.setState({ bid: bidData }, () => { this.props.history.push("/") })
      })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/signup' render={() => <SignupForm handleSignup={this.handleSignup} />} />
          <Route path='/login' render={() => <LoginForm handleLogin={this.handleLogin} />} />
          <Route path='/MtgcardsContainer' component={this.mtgcardscontainer} />
          <Route path='/AuctionbidsContainer' component={this.auctionbidscontainer} />
          <Route path='/' component={About} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);