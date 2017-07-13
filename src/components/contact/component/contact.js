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
						<div>	
							<h1>let's work together...</h1>
						</div>
						<div className="ourContactPhone">	
							<h1>give us a ring</h1>
							<br />
							<h1>(810) 712 - 1271</h1>
						</div>
						<div className="ourContactEmail">
							<h1>drop us a line</h1>
							<br />
							<h1>aguilarwebdevelopment@gmail.com</h1>
						</div>
					</div>
					{this.props.formResponse.error  ? <div className="rightContentContainer"><h1>{`failed: ${this.props.formResponse.error.failure.message} :(`}</h1></div> :

					this.props.formResponse == "success" ?
						<div className="rightContentContainer"><h1>Thank you! We will contact you within the next 2 business days.</h1></div> :
						<div className="rightContentContainer">
							<div className="formHead">
								<h1>don't call us,</h1>
								<br />
								<h1>we will call you</h1>
							</div>
							<ContactForm className="contactForm"/>
						</div>
                    }
				</div>
			</div> 
		)
	}
}

Contact.propTypes = {

}

Contact.contextTypes = {
	router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    let form = [{
        firstName: '',
        lastName: '',
        phone: '',
        company: ''
    }]
    return {
        form: form,
        formResponse: state.formReducer
    }
}

export default connect(mapStateToProps)(Contact)
