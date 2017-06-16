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
					<h1>Work</h1>
				</div>
			</div>
		)	
	}
}

Work.propTypes = {

}

Work.contextTypes = {
	routes: PropTypes.object
}

export default Work
