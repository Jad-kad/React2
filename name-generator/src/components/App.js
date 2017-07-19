import React, { Component } from 'react';
import Header from './Header'
import GeneratorForm from './GeneratorForm'
import Button from './Button'
import store from '../store';
import './App.css';
 
class App extends Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState({counter: state.counter})
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
    return (
      <div className="App">
        <div className="App-inner">
        <Header />

        <div className='GeneratorForm'>
          <GeneratorForm/>
        </div>

        <div className='App-GenerateButton'>
          <Button label="Generate" onClick={this.onGenerateClick.bind(this)}/>
        </div>
        </div>
      </div>
    )
  }

  onGenerateClick(){
    alert('Generate')
  }
}

export default App;