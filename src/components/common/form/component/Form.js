import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TextInput from '../../TextInput.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as formActions from '../actions/formActions.js'

class ContactForm extends Component {
	constructor(props, context) {
		super(props, context) 
		this.state = {
			form: Object.assign({}, this.props.form)	
		}
		this.updateFormState = this.updateFormState.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	updateFormState(event) {
		const field = event.target.name
		let form = this.state.form

		form[field] = event.target.value

		return this.setState({form})
	}

	submitForm(event) {
		event.preventDefault()
		this.props.actions.submitForm(this.state.form)
	}

	render() {
		return(
			<div className="contactForm">
				<form>
					<TextInput 
						name="firstName"
						placeholder="first name"
						onChange={this.updateFormState}
						inputStatus={this.state.form.firstName ? this.state.form.firstName : "false"} 
					/>
					<TextInput
						name="lastName"
						placeholder="last name"
						onChange={this.updateFormState}
						inputStatus={this.state.form.lastName ? this.state.form.lastName : "false"} 

					/>
					<TextInput
						name="phoneNumber"
						placeholder="phone"
						onChange={this.updateFormState}
						inputStatus={this.state.form.phoneNumber ? this.state.form.phoneNumber : "false"} 

					/>
					<TextInput
						name="company"
						placeholder="company"
						onChange={this.updateFormState}
						inputStatus={this.state.form.company ? this.state.form.company : "false"} 

					/>
					<button type="submit" onClick={this.submitForm}>send</button>
				</form>
			</div>
		)	
	}
}

ContactForm.propTypes = {
	form: PropTypes.array,
	actions: PropTypes.object.isRequired
}

ContactForm.contextTypes = {
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
		form: form	
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(formActions, dispatch)	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
