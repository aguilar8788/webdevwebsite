import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TextInput from '../../../../common/TextInput'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as blogFormActions from '../action/blogFormActions'

class BlogForm extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            form: Object.assign({}, this.props.form)
        }
        this.updateFormState = this.updateFormState.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    updateFormState(event) {
        const field = event.target.name
        let form = this.state.form

        form[field] = event.target.value

        return this.setState({form})
    }

    submitForm(event) {
        event.preventDefault()
        this.props.actions.submitForm({data: {
            uri: this.state.uri,
            name: this.state.name,
            type: this.state.type
        }})
    }

    handleFile(e) {

        console.log("event", e.target)
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onload = (upload) => {
            this.setState({
                uri: upload.target.result,
                name: file.name,
                type: "multipart/formdata"
            });
        };

        reader.readAsDataURL(file);
    }

    render() {
        return(
            <div className="blogForm">
                {/*<form>*/}
                    {/*<TextInput*/}
                        {/*name="Title"*/}
                        {/*placeholder="Title"*/}
                        {/*onChange={this.updateFormState}*/}
                        {/*inputStatus={this.state.form.firstName ? this.state.form.firstName : "false"}*/}
                    {/*/>*/}
                    {/*<TextInput*/}
                        {/*name="Description"*/}
                        {/*placeholder="Description"*/}
                        {/*onChange={this.updateFormState}*/}
                        {/*inputStatus={this.state.form.lastName ? this.state.form.lastName : "false"}*/}

                    {/*/>*/}
                    {/*<TextInput*/}
                        {/*name="Tags"*/}
                        {/*placeholder="Tags"*/}
                        {/*onChange={this.updateFormState}*/}
                        {/*inputStatus={this.state.form.phoneNumber ? this.state.form.phoneNumber : "false"}*/}

                    {/*/>*/}
                    {/*<TextInput*/}
                        {/*name="Images"*/}
                        {/*placeholder="Images"*/}
                        {/*onChange={this.updateFormState}*/}
                        {/*inputStatus={this.state.form.company ? this.state.form.company : "false"}*/}

                    {/*/>*/}
                    {/*<input type="file" />*/}
                    {/*<button type="submit" onClick={this.submitForm}>send</button>*/}
                {/*</form>*/}
                <form onSubmit={this.submitForm} method="POST" encType="multipart/form-data" action="http://localhost:8080/files">
                    <table>
                        <tr><td>file to upload:</td><td><input onChange={this.handleFile} type="file" name="file" multiple="multiple"/></td></tr>
                        <tr><td>title:</td><td><input type="text" id="imageTitle" name="imageTitle" /></td></tr>
                        <tr><td>url:</td><td><input type="text" id="siteUrl" name="siteUrl" /></td></tr>
                        <tr><td>type:</td>
                            <td>
                                <select name="type">
                                    <option value="portfolio">Portfolio</option>
                                    <option value="blog">Blog</option>
                                </select>
                            </td></tr>
                        <tr><td><input type="submit" value="Upload" /></td></tr>
                    </table>
                </form>
            </div>
        )
    }
}

BlogForm.propTypes = {
    form: PropTypes.array,
    actions: PropTypes.object.isRequired
}

BlogForm.contextTypes = {
    router: PropTypes.object
}

function mapStateToProps(state, ownProps) {

    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(blogFormActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm)
