import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import BlogForm from '../adminForms/blogForm/component/BlogForm'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as adminActions from '../action/adminAction'

class admin extends Component {
    constructor(props, context) {
        super(props, context)

        this.deleteField = this.deleteField.bind(this)
    }

    componentWillMount() {
        // axios.get(`http://localhost:8080/contact`)
        //     .then(res => {
        //         if (res) {
        //             this.setState({contacts : res.data})
        //         }
        //     })
        this.props.actions.requestContacts()
    }

    submitForm(event) {
        event.preventDefault()
    }

    deleteField(databaseId) {
       console.log("helleerrr", databaseId)
        this.props.actions.submitForm(databaseId)
    }
//abstract away into own component
//create a table for blog posts (to edit and delete)
//make it so I can delete images in work
//make forms work from ui side

    renderTable(contactsArray) {
        return contactsArray.map((contact, index) => {
            return (
                <tbody>

                    <tr>
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.phoneNumber}</td>
                        <td>{contact.company} <button onClick={() => this.deleteField(contact.id)}>X</button></td>
                    </tr>
                </tbody>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="workContainer container-fluid">
                    <h1>Admin Page</h1>
                    <div>
                        {/*<BlogForm*/}
                        {/*/>*/}

                        <table>
                             <thead>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Phone Number</td>
                </thead>
                            {this.renderTable(this.props ? this.props.contacts : [])}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

admin.propTypes = {
    Url: PropTypes.string
}

admin.contextTypes = {
    router: PropTypes.object
}

function mapStateToProps(state, ownProps) {

    return {
        contacts: state.adminReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(adminActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(admin)
