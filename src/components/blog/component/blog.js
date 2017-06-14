import React, {PropTypes, Component} from 'react'

class Blog extends Component {
	constructor(props, context) {
		super(props, context)	
	}

	render() {
		return (
			<div>
				<div className="blogContainer container-fluid">
					<h1>Blog</h1>
				</div>
			</div>
		)	
	}
}

Blog.proptypes = {

}

Blog.contextTypes = {
	router: React.PropTypes.object
}

export default Blog
