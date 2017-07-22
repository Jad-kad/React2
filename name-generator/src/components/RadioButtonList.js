import React from 'react' 
import './RadioButtonList.css' 
import RadioButton from './RadioButton'
import PropTypes from 'prop-types'

export default class RadioButtonList extends React.Component {
	
 static propTypes = {
 	theme: PropTypes.string,
 	handleRadioChange: PropTypes.func.isRequired
 }


 static defaultProps = {
 	handleRadioChange: undefined
 }
	render () {
	  return (
		<div className="RadioButtonList">
		 <ul className='ButtonLi'>
		  <li>
			<RadioButton 
			label='Classic'
			value='classic'
			onChange={this.props.handleRadioChange.bind(this)} 
			checked={this.props.theme === 'classic'}/>
	      </li>
		  <li>
		    <RadioButton 
		    label='Sci-Fi' 
		    value='Bussiness'
		    onChange={this.props.handleRadioChange.bind(this)} 
		    checked={this.props.theme === 'Bussiness'}/>
		  </li>
		  <li>
		    <RadioButton 
		    label='Binary' 
		    value='Hipster'
		    onChange={this.props.handleRadioChange.bind(this)} 
		    checked={this.props.theme === 'Hipster'}/>
		  </li>
		 </ul>
		</div>
		)
	}

}