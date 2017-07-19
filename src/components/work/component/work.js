import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {serverRequest} from '../../../browserUtils/utils'
import {connect} from "react-redux";

class Work extends Component {
    constructor(props, context) {
        super(props, context)

        this.renderWorkImages = this.renderWorkImages.bind(this)
    }

    componentWillMount() {
        axios.get(`${this.props.Url}/portfolio`)
            .then(res => {
                if (res) {
                    this.setState({"work" : res.data})
                }
            })
    }


    renderWorkImages(workUrlsArray) {
        return workUrlsArray.map((url, index) => {
            return (
                <div key={index} className="workContent">
                    <a href={url.metaData.siteUrl} target="_blank"><img className="image" src={`${this.props.Url}/files/${url.fileName}`} width="350" height="190" /></a>
                </div>
            )
        })

    }

    render() {
        return (
            <div>
                <div className="workContainer container-fluid">
                    <h1>what we do</h1>
                    <div className="work">
                        <div className="workContent">
                            {this.state ? this.renderWorkImages(this.state.work) : ""}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Work.propTypes = {
    Url: PropTypes.string
}

Work.contextTypes = {
    router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    let Url = serverRequest()

    return {
        Url
    }
}

export default connect(mapStateToProps)(Work)
