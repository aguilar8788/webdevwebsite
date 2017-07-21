import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import BlogForm from '../adminForms/blogForm/component/BlogForm'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as adminActions from '../action/adminAction'
import Table from '../../common/Table'

class admin extends Component {
    constructor(props, context) {
        super(props, context)

        this.deleteField = this.deleteField.bind(this)
    }

    componentWillMount() {
        this.props.actions.requestContacts()
        this.props.actions.requestBlog()
        this.props.actions.requestPortfolio()
    }

    submitForm(event) {
        event.preventDefault()
    }

    deleteField(databaseId, route) {
        this.props.actions.deleteFromDB(databaseId, route)
    }
//abstract away into own component
//create a table for blog posts (to edit and delete)
//make it so I can delete images in work
//make forms work from ui side
renderBlogPosts(blogData) {
    return blogData.map((data, index) => {
        return(
            <div key={index}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <button onClick={() => this.deleteField(data.id, "blog")}>X</button>
            </div>
        )
    })
}

renderPortfolio(portfolioData) {
    return portfolioData.map((data, index) => {
        return (
            <div key={index}>
                <p>{data.fileName}</p>
            </div>
        )
    })
}
    render() {
        return (
                <div className="workContainer container-fluid">
                    <h1>Admin Page</h1>
                    <div>
                        {/*<BlogForm*/}
                        {/*/>*/}
                        <h2>Contacts</h2>
                        <Table tableData={this.props.contacts} handleDelete={this.deleteField}/>
                    </div>
                    <h2>Blog</h2>
                    {this.props ? this.renderBlogPosts(this.props.blog) : " "}
                    <h2>Portfolio</h2>
                    {this.props ? this.renderPortfolio(this.props.portfolio) : ""}
                </div>
        )
    }
}

admin.propTypes = {
    Url: PropTypes.string,
    actions: PropTypes.object.isRequired,
    contacts: PropTypes.array,
    blog: PropTypes.array,
    portfolio: PropTypes.array
}

admin.contextTypes = {
    router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return {
        contacts: state.adminReducer,
        blog: state.blogReducer,
        portfolio: state.portfolioReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(adminActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(admin)
