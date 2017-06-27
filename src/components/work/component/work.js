import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Work extends Component {
	constructor(props, context) {
		super(props, context)	
	}

	render() {
		return (
			<div>
				<div className="workContainer container-fluid">
					<h1>what we do</h1>
					<div className="work">
						<div className="workContent">
							<div className="content">
							</div>
						</div>
					</div>
				</div>
			</div>
		)	
	}
}

Work.propTypes = {

}

Work.contextTypes = {
	router: PropTypes.object
}

export default Work
