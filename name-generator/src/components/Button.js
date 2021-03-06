import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

export default class Button extends React.Component {

	static propTypes = {
		label : PropTypes.string.isRequired,
		onClick : PropTypes.func.isRequired
	}

	static defaultProps = {
		onClick: () => undefined
	}

	render () {
		const {label, onClick} = this.props

		return (
			<button className='Button' onClick={onClick}>
				{label}
			</button>
				)
	}
}