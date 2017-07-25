import React from 'react'
import './ResultScreen.css'
import * as actions from '../generateName'
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
          		<Button label="Back to generate" onClick={this.onClickBack.bind(this)}/>
       	 	</div>
		</div>
		)
	}

	onClickBack() {		
		actions.changePage('form-screen')
		
		let newerName = null
		const result = store.state.result
		result['companyName'] = newerName
		
		this.setState({ result })
	}
}