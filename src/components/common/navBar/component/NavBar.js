import React, {Proptypes, Component} from 'react'
import { Link, IndexLink } from 'react-router'
import {connect} from 'react-redux'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class NavBar extends Component {
	constructor(props, context) {
		super(props, context)	

		this.showSocialDropDown = this.showSocialDropDown.bind(this)
		this.renderDropDownGlyph = this.renderDropDownGlyph.bind(this)
	}	

	componentWillMount() {
		this.setState({showSocial: false})
	}

	showSocialDropDown() {
		let showSocialBool = this.state.showSocial
		//this.state.showSocial ? this.setState({showSocial: false}) : this.setState({showSocial: true})
		this.setState({showSocial: showSocialBool ? false : true})
	}

	renderDropDownGlyph() {
		if(this.state.showSocial == true) {
		return(
			<span>
       <Glyphicon glyph="glyphicon glyphicon-chevron-up"/>
    </span>	
		)	
		} else {
			return(
			<span>
       <Glyphicon glyph="glyphicon glyphicon-chevron-down"/>
    </span>	
		)
		}
	}
	

	render () {
		return (
			<nav className="navigation">
				<ul>	
					<li><IndexLink to="/" activeClassName="active">about</IndexLink></li>
					<li><IndexLink to="/work" activeClassName="active">work</IndexLink></li>
					<li><IndexLink to="/blog" activeClassName="active">blog</IndexLink></li>
					<li><IndexLink to="/contact" activeClassName="active">contact</IndexLink></li>
					<li className="socialDropDown" onClick={this.showSocialDropDown}>social {this.renderDropDownGlyph()}</li>
					<ul className="socialMedia" onMouseLeave={this.showSocialDropDown} style={this.state.showSocial  == false ? {display: 'none'} : {display: 'flex'}}>
						<li><a href="#">facebook</a></li>
						<li><a href="#">twitter</a></li>
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
