import React, {Component} from 'react'
import {IndexLink} from 'react-router'

class Home extends Component {
	constructor(props, context) {
		super(props, context)	
	}

	render() {
		let year = new Date().getFullYear()
		return (
			<div>
				<div className="aboutContainer container-fluid">
					<h1>Your web presence is important in {year}</h1>
					<h1>let us build something unique and responsive</h1>
					<h1>that will catch your clients attention.</h1>
                    <IndexLink to="/work" activeClassName="active"><button type="button" className="btn btn-primary btn-lg">Check out our work</button></IndexLink>
				</div>
			</div>
		)	
	}
}

export default Home
