import React, {Proptypes, Component} from 'react'
import { Link, IndexLink } from 'react-router'
import {connect} from 'react-redux'
class NavBar extends Component {
	constructor(props, context) {
		super(props, context)	
	}	

	componentWillMount() {
		this.setState({showSocial: false})
	}

	render () {
		return (
			<nav className="navigation">
				<ul>	
					<li><IndexLink to="/" activeClassName="active">about</IndexLink></li>
					<li><IndexLink to="/work" activeClassName="active">work</IndexLink></li>
					<li><IndexLink to="/blog" activeClassName="active">blog</IndexLink></li>
					<li><IndexLink to="/contact" activeClassName="active">contact</IndexLink></li>
					<li className="active" onClick={() => this.state.showSocial ? this.setState({showSocial: false}) : this.setState({showSocial: true})}>social</li>
					<ul className="socialMedia" style={this.state.showSocial ? {display: 'none'} : {display: 'flex'}}>
						<li>facebook</li>
						<li>twitter</li>
					</ul>
				</ul>	
			</nav>
		)
	}
}

NavBar.propTypes = {

}

NavBar.contextTypes = {
	router: React.PropTypes.object
}

function mapStateToProps(state, ownProps) {
	return {
	}
}

export default connect(mapStateToProps)(NavBar)
