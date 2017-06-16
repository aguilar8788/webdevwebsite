import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NavBar from '../../common/navBar/component/NavBar.js'

class About extends Component {
	constructor(props, context) {
		super(props, context)	
	}

	render() {
		return (
			<div>
				<div className="aboutContainer container-fluid">
					<h1>We are Detroit based developers </h1>
					<h1>that are passionate about making </h1>
					<h1>your web dreams a reality</h1>
				</div>
			</div>
		)	
	}
}

About.propTypes = {
}

About.contextTypes = {
	router: PropTypes.object
}

export default About
