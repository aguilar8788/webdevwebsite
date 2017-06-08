import React, {PropTypes, Component} from 'react'
import NavBar from '../../common/navBar/component/NavBar.js'

class About extends Component {
	constructor(props, context) {
		super(props, context)	
	}

	render() {
		return (
			<div>
				<NavBar />
				<div className="aboutContainer container-fluid">
					<h1>about page</h1>
				</div>
			</div>
		)	
	}
}

About.propTypes = {
}

About.contextTypes = {
	router: React.PropTypes.object
}

export default About
