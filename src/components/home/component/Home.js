import React, {Component} from 'react'

class Home extends Component {
	constructor(props, context) {
		super(props, context)	
	}

	render() {
		return (
			<div>
				<div className="aboutContainer container-fluid">
					<h1>We are developers </h1>
					<h1>that are passionate about making </h1>
					<h1>your web dreams a reality</h1>
				</div>
			</div>
		)	
	}
}

export default Home
