import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Blog extends Component {
	constructor(props, context) {
		super(props, context)	
	}

	render() {
		return (
			<div>
				<div className="blogContainer container-fluid">
					<h1>coming soon...</h1>
			</div>
			</div>
		)	
	}
}

Blog.proptypes = {

}

Blog.contextTypes = {
	router: PropTypes.object
}

export default Blog
