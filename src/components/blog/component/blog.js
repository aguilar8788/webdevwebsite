import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Blog extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentWillMount() {
        axios.get('http://localhost:8080/blog')
            .then(res => {
                if (res) {
                    this.setState({"blogData" : res.data})
                }
            })
    }

    renderBlogEntry(blogDataArray) {
        console.log("data", blogDataArray[0].imageName)
        renderImages(blogDataArray[1].imageName)
        return blogDataArray.map(data => {
            return (
                <div className="blogEntry">
                    <img className="image" src={`http://localhost:8080/files/${data.imageName[0]}`} />
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="blogContainer container-fluid">
                    {this.state ? this.renderBlogEntry(this.state.blogData) : ""}
                </div>
            </div>
        )
    }
}

function renderImages(imageArray) {
    console.log(imageArray)
}

Blog.proptypes = {

}

Blog.contextTypes = {
    router: PropTypes.object
}

export default Blog
