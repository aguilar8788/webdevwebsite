import React, {Component} from 'react'
import PropTypes from 'prop-types'
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
		this.setState({showSocial: showSocialBool ? false : true})
	}

	renderDropDownGlyph() {
		if(this.state.showSocial == true) {
		return(
			<span>
       <Glyphicon glyph="glyphicon glyphicon-menu-down"/>
    </span>	
		)	
		} else {
			return(
			<span>
       <Glyphicon glyph="glyphicon glyphicon-menu-up"/>
    </span>	
		)
		}
	}
	

	render () {
		return (
			<nav className="navigation">
				<img className="logo" src={require("../../../../images/AguilarWebDevLogo.png")} />
				<ul>	
					<li><IndexLink to="/" activeClassName="active">about</IndexLink></li>
					<li><IndexLink to="/work" activeClassName="active">work</IndexLink></li>
					<li><IndexLink to="/blog" activeClassName="active">blog</IndexLink></li>
					<li><IndexLink to="/contact" activeClassName="active">contact</IndexLink></li>
					<li className="socialDropDown" onClick={this.showSocialDropDown}><a href="#">social {this.renderDropDownGlyph()}</a></li>
					<ul className="socialMedia" onMouseLeave={this.showSocialDropDown} style={this.state.showSocial  == false ? {display: 'none'} : {display: 'flex'}}>
						<li><a className="socialBrands" href="https://www.youtube.com/channel/UCvaMlquFLO6rmDiu4c7uUmA" target="_blank">youtube</a></li>
						<li><a className="socialBrands" href="https://www.facebook.com/Aguilar-Web-Development-1690308347937446/" target="_blank">facebook</a></li>
						<li><a className="socialBrands" href="https://www.twitter.com/AguilarWebDev" target="_blank">twitter</a></li>
					</ul>
				</ul>	
			</nav>
		)
	}
}

NavBar.propTypes = {

}

NavBar.contextTypes = {
	router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
	return {
	}
}

export default connect(mapStateToProps)(NavBar)
