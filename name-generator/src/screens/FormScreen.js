import React from 'react'
import './FormScreen.css'
import GeneratorForm from '../components/GeneratorForm'
import Button from '../components/Button'
import * as actions from '../actions/generateName'
import store from '../store';


export default class FormScreen extends React.Component {

componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state.form)
    })
  }

componentWillUnmount() {
    this.subscription.remove();
  }

render() {
	return (
		<div className='FormScreen'>		
        	<div className='GeneratorForm'>
          		<GeneratorForm/>
        	</div>

        <div className='App-GenerateButton'>
          	<Button label="Generate" onClick={this.onGenerateClick.bind(this)}/>
        </div>
		</div>


		)
	}

onGenerateClick(){
	actions.generateName(this.state)
    actions.changePage('result-screen')
  }
}