import React, {PropTypes, Component} from 'react'
import TextInput from '../../TextInput.js'
class ContactForm extends Component {
	constructor(props, context) {
		super(props, context) 	
	}

	render() {
		return(
			<div className="contactForm">
				<form>
					<TextInput 
						name="firstName"
						label="first Name"
						onChange={_=>_}
					/>
					<TextInput
						name="lastName"
						label="last Name"
						onChange={_=>_}
					/>
					<TextInput
						name="phoneNumber"
						label="phone"
						onChange={_=>_}
					/>
					<TextInput
						name="company"
						label="company"
						onChange={_=>_}
					/>
				</form>
			</div>
		)	
	}
}

ContactForm.proptypes = {

}

ContactForm.contextTypes = {
 router: React.PropTypes.object
}

export default ContactForm
