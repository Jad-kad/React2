import React from 'react' 
import './RadioButtonList.css' 
import RadioButton from './RadioButton'
import PropTypes from 'prop-types'

export default class RadioButtonList extends React.Component {
	
 static propTypes = {
 	theme: PropTypes.string,
 }

	render () {
	  return (
		<div className="RadioButtonList">
		 <ul className='ButtonLi'>
			 <li><RadioButton label='Classic' value='classic' checked={this.props.theme === 'classic'}/></li>
			 <li><RadioButton label='Bussiness' value='Bussiness' checked={this.props.theme === 'Bussiness'}/></li>
			 <li><RadioButton label='Hipster' value='Hipster' checked={this.props.theme === 'Hipster'}/></li>
		 </ul>
		</div>
		)
	}
}