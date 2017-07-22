import React from 'react'
import './ResultScreen.css'
import * as actions from '../actions/generateName'
import store from '../store'
import Button from '../components/Button'

export default class ResultScreen extends React.Component {


componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state.result)
    })
  }

componentWillUnmount() {
    this.subscription.remove();
  }


render() {
 	return (
		<div className='ResultScreen'>
		   <h1>
			  {this.state.companyName}
		   </h1>

			<div className='App-GenerateButton'>
          		<Button label="Back to generate" onClick={() => actions.changePage('form-screen')}/>
       	 	</div>
		</div>
		)
	}
}