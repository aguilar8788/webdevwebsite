import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ContactForm from '../../common/form/component/Form.js'
import {connect} from 'react-redux'
class Contact extends Component {
	constructor(props, context) {
		super(props, context)	
	}

	render() {
		return (
			<div>
				<div className="contactContainer container-fluid">
					<div className="leftContentContainer">	

					</div>
					{this.props.formResponse.error  ? <div className="rightContentContainer"><h1>{`failed: ${this.props.formResponse.error.failure.message} :(`}</h1></div> :

					this.props.formResponse == "success" ?
						<div className="rightContentContainer"><h1>Thank you! We will contact you within the next 2 business days.</h1></div> :
						<div className="rightContentContainer">

							<ContactForm className="contactForm"/>
						</div>
                    }
				</div>
			</div> 
		)
	}
}

Contact.propTypes = {
	formResponse: PropTypes.string

}

Contact.contextTypes = {
	router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    let form = [{
        name: '',
        phone: '',
		email: '',
        company: '',
		description: ''
    }]
    return {
        form: form,
        formResponse: state.formReducer
    }
}

export default connect(mapStateToProps)(Contact)
