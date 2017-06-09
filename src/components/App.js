import React, { Component, PropTypes } from 'react'
import NavBar from './common/navBar/component/NavBar.js'
class App extends Component {
	render() {
		return (
			<div className="app">
				<NavBar />
				{this.props.children}
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
}

export default App
