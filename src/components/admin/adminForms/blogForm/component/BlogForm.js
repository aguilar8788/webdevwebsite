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
    }

    updateFormState(event) {
        const field = event.target.name
        let form = this.state.form

        form[field] = event.target.value

        return this.setState({form})
    }

    submitForm(event) {
        event.preventDefault()
        this.props.actions.submitForm(this.state.form)
    }

    render() {
        console.log("state", this.state)
        return(
            <div className="blogForm">
                <form>
                    <TextInput
                        name="Title"
                        placeholder="Title"
                        onChange={this.updateFormState}
                        inputStatus={this.state.form.firstName ? this.state.form.firstName : "false"}
                    />
                    <TextInput
                        name="Description"
                        placeholder="Description"
                        onChange={this.updateFormState}
                        inputStatus={this.state.form.lastName ? this.state.form.lastName : "false"}

                    />
                    <TextInput
                        name="Tags"
                        placeholder="Tags"
                        onChange={this.updateFormState}
                        inputStatus={this.state.form.phoneNumber ? this.state.form.phoneNumber : "false"}

                    />
                    <TextInput
                        name="Images"
                        placeholder="Images"
                        onChange={this.updateFormState}
                        inputStatus={this.state.form.company ? this.state.form.company : "false"}

                    />
                    <input type="file" />
                    <button type="submit" onClick={this.submitForm}>send</button>
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
