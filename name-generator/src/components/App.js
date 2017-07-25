import React, { Component } from 'react';
import Header from './Header'
import store from '../store';
import './App.css';
import FormScreen from '../screens/FormScreen'
import ResultScreen from '../screens/ResultScreen'
import LoadingScreen from '../screens/LoadingScreen'


class App extends Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {

    let screen;

    if (this.state.loading === true) {
      screen = (<LoadingScreen/>)
    } 
    else if (this.state.result.companyName != null) {
      screen = (<ResultScreen/>)
    } 
    else if (this.state.pageName === 'form-screen') {
      screen = (<FormScreen/>)
    }


    return (
      <div className="App">
        <div className="App-inner">
        <Header />
        {screen}
        </div>
      </div>
    )
  }

}


export default App;