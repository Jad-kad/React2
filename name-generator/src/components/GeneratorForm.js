import React from 'react'
import './GeneratorForm.css'
import store from '../store'
import TextField from './TextField'
import RadioButtonList from './RadioButtonList'

export default class GeneratorForm extends React.Component {

 	componentWillMount() {
    	this.subscription = store.subscribe(state => {
      	this.setState(state.form)
   	 })
  	}

  	componentWillUnmount() {
    	this.subscription.remove()
  	} 	


	render () {
		return (
			<div className='GeneratorForm'>
				<TextField 
				  label=' What is your name?'
				  value={this.state.name}
				  onChange={this.handleChange.bind(this, 'name')}

				/>
				<TextField 
				  label=' What is your favorite number?'
				  value={this.state.email}
				  onChange={this.handleChange.bind(this, 'email')}
				/>

				<RadioButtonList
					theme={this.state.theme}
					handleRadioChange= {this.handleRadioChange.bind(this)}
				 />
			</div>
				)
	}
	handleChange(input, value) {
	  const form = {...this.state}
	  form[input] = value
	  store.setState({form})
	}

	handleRadioChange(value) {
		const form = {...this.state}
		form['theme'] = value
		store.setState({form})
	}

}