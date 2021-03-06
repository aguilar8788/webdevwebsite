import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import SlideShow from 'react-image-slideshow';
import {serverRequest} from "../../../browserUtils/utils";
import {connect} from "react-redux";

class Blog extends Component {
    constructor(props, context) {
        super(props, context)

        this.renderImages = this.renderImages.bind(this)

    }

    componentWillMount() {
        axios.get(`${this.props.Url}/blog`)
            .then(res => {
                if (res) {
                    this.setState({"blogData" : res.data})
                }
            }).catch(errors => {
                console.error("error", errors)
        })

    }

    renderBlogEntry(blogDataArray) {
        return blogDataArray.map((data, index) => {
            return (
                <div key={index} className="blogEntry">
                </div>
            )
        })
    }

    handleSlideshowOpen(index)
    {
        this.refs.SlideShow.handleModalOpen(index);
    }

    renderImages(imageArray) {
        return imageArray.map( (image, index) => {
            return(
                <div key={index} >
                    <img className="image" src={`${this.props.Url}/files/${image}`} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="blogContainer container-fluid">
                    <h1>Coming Soon!</h1>
                </div>
            </div>
        )
    }
}


Blog.proptypes = {
    Url: PropTypes.string
}

Blog.contextTypes = {
    router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    let Url = serverRequest()

    return {
        Url
    }
}

export default connect(mapStateToProps)(Blog)
