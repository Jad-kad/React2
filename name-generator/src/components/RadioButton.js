import React from 'react'
import PropTypes from 'prop-types'

export default class RadioButton extends React.Component {
	
	static propTypes = {
		label:PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		checked: PropTypes.bool.isRequired,
		onChange: PropTypes.func.isRequired
	}

	static defaultProps = {
		label: '',
		value: '',
		checked: false
	}

	render() {
		const {label, value, checked} = this.props
		return (
			<div> 
			  <label>
			  <input 
			  type='radio' 
			  value={value} 
			  onChange={this.handleRadioButton.bind(this)} 
			  checked={checked} />
			  {label}
			  </label>
			</div>
				)
	}

	handleRadioButton(event){
		const value = event.target.value
		this.props.onChange(value)
	}
}