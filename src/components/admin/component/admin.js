import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import BlogForm from '../adminForms/blogForm/component/BlogForm'
class admin extends Component {
	constructor(props, context) {
		super(props, context)	
	}

	componentWillMount() {
	}

	submitForm(event) {
		event.preventDefault()	
		console.log(event)
	}

	render() {
		return (
			<div>
				<div className="workContainer container-fluid">
					<h1>Admin Page</h1>
					<div>
						<BlogForm
						/>
					</div>
				</div>
			</div>
		)	
	}
}

admin.propTypes = {

}

admin.contextTypes = {
	router: PropTypes.object
}

export default admin
