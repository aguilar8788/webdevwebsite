import React, {PropTypes, Component} from 'react'

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
	routes: React.PropTypes.object
}

export default Work
