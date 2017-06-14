import React, {Proptypes, Component} from 'react'
import ContactForm from '../../common/form/component/Form.js'
class Contact extends Component {
	constructor(props, context) {
		super(props, context)	
	}

	render() {
		return (
			<div>
				<div className="contactContainer container-fluid">
					<h1>Contact</h1>
					<ContactForm />
				</div>
			</div> 
		)
	}
}

Contact.propTypes = {

}

Contact.contextTypes = {
	router: React.PropTypes.object
}

export default Contact