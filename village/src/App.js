import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import TopBar from './components/TopBar';
import OneSmurf from './components/OneSmurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({smurfs: res.data});
    })
    .catch(err => {
      console.log('There was an error in getSmurfs:', err);
    });
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <Route exact path="/" render={ () => <Smurfs smurfs={this.state.smurfs} getSmurfs={this.getSmurfs} /> } />
        <Route path="/smurf-form" render={ () => <SmurfForm getSmurfs={this.getSmurfs} /> } />
        <Route path="/smurf/:id" render={() => <OneSmurf /> } />
      </div>
    );
  }
}

export default App;
